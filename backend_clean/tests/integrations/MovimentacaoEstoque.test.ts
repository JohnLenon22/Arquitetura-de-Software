import request from "supertest"
import { app } from "../../src/app"
import { prisma } from "../../prisma/client"
import { randomUUID } from "crypto"

describe("Teste de Integração - Movimentação Estoque", () => {
    beforeEach(async () => {
        await prisma.movimentacaoEstoque.deleteMany();
        await prisma.produto.deleteMany();
        await prisma.categoria.deleteMany();
        await prisma.localArmazenamento.deleteMany();
        await prisma.usuario.deleteMany();
    });
    
    afterAll(async () => {
        await prisma.$disconnect();
    });

    it("deve criar um movimentacao estoque corretamente", async () => {
        const categoria = await prisma.categoria.create({
            data : {
                nome: "Categoria Teste"   
            }
        })

        const produto = await prisma.produto.create({
            data : {
                id: randomUUID(),
                nome: "Produto Teste",
                quantidade: 1000,
                precoVenda: 50,
                precoCompra: 30,
                descricao: "Descrição do Produto Teste",
                idCategoria: Number(categoria.id)
            }
        })

        const local =  await prisma.localArmazenamento.create({
            data: {
                id: randomUUID(),
                nome: "Nome Teste",
                endereco: "Endereço Teste",
                responsavel: "Responsável Teste"
            }
        })

        const usuario = await prisma.usuario.create({
            data: {
                id: randomUUID(),
                nome: "Usuário Teste",
                email: "teste@example.com",
                senhaHash: "senha123",
                tipoUsuario: "ADMIN"
            }
        })

        const input = {   
            idLocalArmazenamento: local.id.toString(),
            idProduto: produto.id.toString(),
            idUsuario: usuario.id.toString(),
            tipoMovimentacao: String("ENTRADA"),
            quantidade: 900
        }
        const res = await request(app).post("/movimentInventories").send(input)
        console.log(res.body)
        expect(res.status).toBe(201)
    })

    it("deve retornar erro caso quantidade menor ou igual a zero", async () => {
        
        const input = {   
            idLocalArmazenamento: "dbbf80c9-5895-4fdf-861f-7275c2b2e6a4",
            idProduto: "5ae8ce39-0a51-4bd7-8ae0-2e3d9de565ce",
            idUsuario: "a5f55eb0-a37e-4e28-8d9f-f32b53d13985",
            tipoMovimentacao: "ENTRADA",
            quantidade: -1
        }
        const res = await request(app).post("/movimentInventories").send(input)

        expect(res.status).toBe(400)
    })

    it("deve retornar erro caso quantidade menor ou igual a zero", async () => {
        const input = {   
            idLocalArmazenamento: "dbbf80c9-5895-4fdf-861f-7275c2b2e6a4",
            idProduto: "5ae8ce39-0a51-4bd7-8ae0-2e3d9de565ce",
            idUsuario: "a5f55eb0-a37e-4e28-8d9f-f32b53d13985",
            tipoMovimentacao: "ENTRADA",
            quantidade: 0
        }
        const res = await request(app).post("/movimentInventories").send(input)

        expect(res.status).toBe(400)
    })

    it("deve retornar erro caso diferente de ENTRADA / TRANSFERENCIA / SAIDA", async () => {
        const input = {   
            idLocalArmazenamento: "dbbf80c9-5895-4fdf-861f-7275c2b2e6a4",
            idProduto: "5ae8ce39-0a51-4bd7-8ae0-2e3d9de565ce",
            idUsuario: "a5f55eb0-a37e-4e28-8d9f-f32b53d13985",
            tipoMovimentacao: "SIM",
            quantidade: 3
        }
        const res = await request(app).post("/movimentInventories").send(input)

        expect(res.status).toBe(400)
    })

    it("deve retornar erro caso data seja uma data futura", async () => {
        const input = {   
            data: new Date("2027-01-01"),
            idLocalArmazenamento: "dbbf80c9-5895-4fdf-861f-7275c2b2e6a4",
            idProduto: "5ae8ce39-0a51-4bd7-8ae0-2e3d9de565ce",
            idUsuario: "a5f55eb0-a37e-4e28-8d9f-f32b53d13985",
            tipoMovimentacao: "SIM",
            quantidade: 3
        }
        const res = await request(app).post("/movimentInventories").send(input)

        expect(res.status).toBe(400)
    })

})
import request from "supertest"
import { app } from "../../src/app"
import { prisma } from "../../src/infraestructure/prisma/client"
import { randomUUID } from "crypto"

describe("Teste de Integração - Movimentação Estoque", () => {
    beforeEach(async () => {
        await prisma.movimentacaoEstoque.deleteMany();
    });

    afterAll(async () => {
        await prisma.$disconnect();
    });

    it("deve criar um movimentacao estoque corretamente", async () => {
        const input = {   
            idLocalArmazenamento: "dbbf80c9-5895-4fdf-861f-7275c2b2e6a4",
            idProduto: "5ae8ce39-0a51-4bd7-8ae0-2e3d9de565ce",
            idUsuario: "a5f55eb0-a37e-4e28-8d9f-f32b53d13985",
            tipoMovimentacao: "ENTRADA",
            quantidade: 900
        }
        const res = await request(app).post("/movimentInventories").send(input)

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
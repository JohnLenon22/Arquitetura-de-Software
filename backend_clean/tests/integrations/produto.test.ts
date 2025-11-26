import request from "supertest"
import { app } from "../../src/app"
import { prisma } from "../../src/infraestructure/prisma/client"

describe("Teste de Integração - Produtos", () => {
    beforeEach(async () => {
    await prisma.produto.deleteMany();
    });

    afterAll(async () => {
        await prisma.$disconnect();
    });

    it("deve criar um produto", async () => {
        const input = {
            nome: "Sim2",
            quantidade: 10,
            precoVenda: 5.0,
            precoCompra: 2.0,
            descricao: "sim",
            idCategoria: 1
        };

        const res = await request(app).post("/products").send(input)

        expect(res.status).toBe(201)
    })

    it('deve retornar erro se preço de compra e preço de venda for menores que zero', async () => {
        const input = {
            nome: "Sim2",
            quantidade: 10,
            precoVenda: -3.0,
            precoCompra: -2.0,
            descricao: "sim",
            idCategoria: 1
        };

        const res = await request(app).post("/products").send(input)

        expect(res.status).toBe(400)
        expect(res.body.error).toBe("Preço de compra e preço de venda devem ser maiores que zero")
    });

    it('deve retornar erro caso preço de venda for menor que preço de compra', async () => {
        const input = {
            nome: "Sim2",
            quantidade: 10,
            precoVenda: 1.0,
            precoCompra: 2.0,
            descricao: "sim",
            idCategoria: 1
        };

        const res = await request(app).post("/products").send(input)

        expect(res.status).toBe(400)
        expect(res.body.error).toBe("O preço de venda do produto deve ser maior que o preço de compra")

    });


    it('deve retornar erro caso a quantidade seja menor que 0', async () => {
        const input = {
            nome: "Sim2",
            quantidade: -1,
            precoVenda: 3.0,
            precoCompra: 2.0,
            descricao: "sim",
            idCategoria: 1
        };

        const res = await request(app).post("/products").send(input)

        expect(res.status).toBe(400)
        expect(res.body.error).toBe("A quantidade do produto deve ser maior ou igual a zero")

    });


    it('deve retornar erro caso nome for vazio', async () => {
        const input = {
            nome: "   ",
            quantidade: 10,
            precoVenda: 3.0,
            precoCompra: 2.0,
            descricao: "sim",
            idCategoria: 1
        };

        const res = await request(app).post("/products").send(input)

        expect(res.status).toBe(400)
        expect(res.body.error).toBe("O nome do produto não pode ser vazio")
    });


    it('deve retornar erro caso data seja futura', async () => {
        const input = {
            nome: "asd",
            dataCadastro: "4025-11-11",
            quantidade: 10,
            precoVenda: 3.0,
            precoCompra: 2.0,
            descricao: "sim",
            idCategoria: 1
        };

        const res = await request(app).post("/products").send(input)

        expect(res.status).toBe(400)
        expect(res.body.error).toBe("A data de cadastro não pode ser uma data futura")
    });

    it('deve retornar erro caso data seja inválida', async () => {
        const input = {
            nome: "asd",
            dataCadastro: "20$5-11-11",
            quantidade: 10,
            precoVenda: 3.0,
            precoCompra: 2.0,
            descricao: "sim",
            idCategoria: 1
        };

        const res = await request(app).post("/products").send(input)

        expect(res.status).toBe(400)
        expect(res.body.error).toBe("A data de cadastro é inválida")
    });

    



    it("Deve listar os produtos", async () => {
        const res = await request(app).get("/products")

        expect(res.status).toBe(200)
    })

})


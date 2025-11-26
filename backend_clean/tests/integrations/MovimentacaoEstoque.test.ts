import request from "supertest"
import { app } from "../../src/app"
import { prisma } from "../../src/infraestructure/prisma/client"

describe("Teste de Integração - Movimentação Estoque", () => {
    beforeEach(async () => {
        await prisma.movimentacaoEstoque.deleteMany();
    });

    afterAll(async () => {
        await prisma.$disconnect();
    });

    it("deve criar um movimentacao estoque corretamente", async () => {
        const input = {
            idProduto: "cd278e51-ea84-4007-a846-35ba2475e904",
            idUsuario: "a5f55eb0-a37e-4e28-8d9f-f32b53d13985",
            idLocalArmazenamento: "dbbf80c9-5895-4fdf-861f-7275c2b2e6a4",
            tipoMovimentacao: "ENTRADA",
            quantidade: 900

        }
        const res = await request(app).post("/movimentInventories/").send(input)

        expect(res.status).toBe(201)
    })

})
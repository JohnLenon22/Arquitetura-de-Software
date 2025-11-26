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

    it("deve criar um movimentacao corretamente")

})
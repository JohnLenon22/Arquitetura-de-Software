import { CreateProduto } from "../../src/application/usecases/Produto/CreateProduto"; 
import { GetProduto } from "../../src/application/usecases/Produto/GetProduto"; 
import { UpdateQuantidadeProduto } from "../../src/application/usecases/Produto/UpdateQuantidadeProduto";
import { DeleteProduto } from "../../src/application/usecases/Produto/DeleteProduto"; 
import { GetByIdProduto } from "../../src/application/usecases/Produto/GetByIdProduto"; 
import { IProdutoRepository } from "../../src/domain/repositories/IProdutoRepository"; 
import { Produto } from "../../src/domain/entities/Produto";
import { randomUUID } from "crypto";

describe("Produto", () => {
    let produtoRepoMock!: jest.Mocked<IProdutoRepository>;
    let createProduto!: CreateProduto;
    let getProduto!: GetProduto;
    let updateQuantidadeProduto!: UpdateQuantidadeProduto;
    let deleteProduto!: DeleteProduto;
    let getByIdProduto!: GetByIdProduto;

    beforeEach(() => {
        produtoRepoMock = {
            create: jest.fn(),
            updateQuantidade: jest.fn(),
            findById: jest.fn(),
            findAll: jest.fn(),
            delete: jest.fn(),
            update: jest.fn(),
        };
        
        createProduto = new CreateProduto(produtoRepoMock);
        getProduto = new GetProduto(produtoRepoMock);
        updateQuantidadeProduto = new UpdateQuantidadeProduto(produtoRepoMock);
        deleteProduto = new DeleteProduto(produtoRepoMock);
        getByIdProduto = new GetByIdProduto(produtoRepoMock);

    });

    it("deve criar um produto corretamente", async () => {

        const input = {
            id: randomUUID(),
            nome: "Sim",
            quantidade: 10,
            dataCadastro: new Date("2022-11-11"),
            precoVenda: 5.0,
            precoCompra: 2.0,
            descricao: "sim",
            idCategoria: 1
        };
        const produtoTest = new Produto(
            input.id,
            input.nome,
            input.quantidade,
            input.dataCadastro,
            input.precoVenda,
            input.precoCompra,
            input.descricao,
            input.idCategoria
        
        )
        produtoRepoMock.create.mockResolvedValueOnce();

        const result = await createProduto.execute(input);

        expect(produtoRepoMock.create).toHaveBeenCalledTimes(1);
        expect(produtoRepoMock.create).toHaveBeenCalledWith(expect.any(Produto));
        expect(result).toEqual({message: `Produto criado com sucesso\nNome: ${produtoTest.nome}`});
    });


    it('deve retornar erro se preço de compra e preço de venda for menores que zero', async () => {
        expect(() => new Produto(randomUUID(), "test 1", 1, new Date("2022-11-11"), -1.0, 0.0, "", 1)).toThrow("Preço de compra e preço de venda devem ser maiores que zero");
    });


    it('deve retornar erro caso preço de venda for menor que preço de compra', async () => {
        expect(() => new Produto(randomUUID(), "test 2", 1, new Date("2022-11-11"), 1.1, 2.0, "", 1)).toThrow("O preço de venda do produto deve ser maior que o preço de compra");
    });


    it('deve retornar erro caso a quantidade seja menor que 0', async () => {
        expect(() => new Produto(randomUUID(), "test 3", -1, new Date("2022-11-11"), 2.0, 1.0, "", 1)).toThrow("A quantidade do produto deve ser maior ou igual a zero");
        expect(() => new Produto(randomUUID(), "test 4", -1.5, new Date("2022-11-11"), 3.0, 2.0, "", 1)).toThrow("A quantidade do produto deve ser maior ou igual a zero");
    });


    it('deve retornar erro se o nome for vazio', async () => {
        expect(() => new Produto(randomUUID(), "", 1, new Date("2022-11-11"), 5.0, 2.0, "", 1)).toThrow("O nome do produto não pode ser vazio");
        expect(() => new Produto(randomUUID(), "  ", 1, new Date("2022-11-11"), 5.0, 2.0, "", 1)).toThrow("O nome do produto não pode ser vazio")

    });


    it('deve listar os produtos corretamente', async () => {
        const produtosMock = [
            new Produto(
                "1g241sf2",
                "Sim", 
                10, 
                new Date("2022-11-11"), 
                5.0, 
                2.0, 
                "sim", 
                1
            ),
            new Produto(
                "2312",
                "Sim", 
                10, 
                new Date("2022-11-11"), 
                6.0, 
                1.0, 
                "23145124", 
                2
            )
        ]
        produtoRepoMock.findAll.mockResolvedValueOnce(produtosMock)
        const result = await getProduto.execute()

        expect(produtoRepoMock.findAll).toHaveBeenCalledTimes(1)
        expect(result).toHaveLength(2)
        expect(result[0].id).toBe('1g241sf2')
        expect(result[1].id).toBe('2312')
    });


    it("deve deletar o produto corretamente", async () => {
        produtoRepoMock.delete.mockResolvedValueOnce();

        const resultDeletar = await deleteProduto.execute({ id: "1" });

        expect(produtoRepoMock.delete).toHaveBeenCalledTimes(1);
        expect(produtoRepoMock.delete).toHaveBeenCalledWith("1");
        expect(resultDeletar).toEqual({message: "Produto deletado com sucesso"});
    });


  
});

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
            precoCompra: 5.0,
            precoVenda: 2.0,
            descricao: "sim",
            idCategoria: 1
        };
        const produtoTest = new Produto(
            input.id,
            input.nome,
            input.quantidade,
            input.dataCadastro,
            input.precoCompra,
            input.precoVenda,
            input.descricao,
            input.idCategoria
        
        )
        produtoRepoMock.create.mockResolvedValueOnce();

        const result = await createProduto.execute(input);
        
        expect(produtoRepoMock.create).toHaveBeenCalledTimes(1);
        expect(produtoRepoMock.create).toHaveBeenCalledWith(expect.any(Produto));
        expect(result).toEqual({message: `Produto criado com sucesso\n ID: ${id}`});
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

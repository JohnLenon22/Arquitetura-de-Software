import { CreateCategoria } from "../../../../src/application/usecases/Categoria/CreateCategoria"; 
import { GetCategoria } from "../../../../src/application/usecases/Categoria/GetCategoria";
import { DeleteCategoria } from "../../../../src/application/usecases/Categoria/DeleteCategoria";
import { GetByIdCategoria } from "../../../../src/application/usecases/Categoria/GetByIdCategoria";

import { ICategoriaRepository } from "../../../../src/domain/repositories/ICategoriaRepository";
import { Categoria } from "../../../../src/domain/entities/Categoria";

describe("Categoria", () => {
  let categoriaRepoMock!: jest.Mocked<ICategoriaRepository>;
  let createCategoria!: CreateCategoria;
  let getCategoria!: GetCategoria;
  let deleteCategoria!: DeleteCategoria;
  let getByIdCategoria!: GetByIdCategoria;

  beforeEach(() => {
    categoriaRepoMock = {
      create: jest.fn(),
      findAll: jest.fn(),
      findById: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };

    createCategoria = new CreateCategoria(categoriaRepoMock);
    getCategoria = new GetCategoria(categoriaRepoMock);
    deleteCategoria = new DeleteCategoria(categoriaRepoMock);
    getByIdCategoria = new GetByIdCategoria(categoriaRepoMock);
  });

  it("deve criar uma categoria corretamente", async () => {
    const categoriaTest = new Categoria("Bebidas", 1);
    categoriaRepoMock.create.mockResolvedValueOnce(categoriaTest);

    const result = await createCategoria.execute({ nome: "Bebidas"});

    expect(categoriaRepoMock.create).toHaveBeenCalledTimes(1);
    expect(categoriaRepoMock.create).toHaveBeenCalledWith(expect.any(Categoria));
    expect(result).toEqual({message: `Categoria criada com sucesso\nNome: ${categoriaTest.nome}` });
  });


  it('deve listar as categorias corretamente', async () => {
    const categoriasMock = [
      new Categoria("Limpeza", 1),
      new Categoria("check", 2)

    ]
    categoriaRepoMock.findAll.mockResolvedValueOnce(categoriasMock)

    const result = await getCategoria.execute()

    expect(categoriaRepoMock.findAll).toHaveBeenCalledTimes(1)
    expect(result).toHaveLength(2)
    expect(result[0].nome).toBe("Limpeza");
    expect(result[1].nome).toBe("check");
  });


  it('deve deletar a categoria corretamente', async () => {
    categoriaRepoMock.delete.mockResolvedValueOnce();

    const resultDeletar = await deleteCategoria.execute({id: 1})

    expect(categoriaRepoMock.delete).toHaveBeenCalledTimes(1)
    expect(categoriaRepoMock.delete).toHaveBeenCalledWith(1)
    expect(resultDeletar).toEqual({message: "Categoria deletada com sucesso"})
  })


  
});

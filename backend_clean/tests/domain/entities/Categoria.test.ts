import { Categoria } from "../../../src/domain/entities/Categoria";

describe("Categoria", () => {

  it("deve criar uma categoria válida", () => {
    const categoria = new Categoria("Alimentos", 1);

    expect(categoria.nome).toBe("Alimentos");
    expect(categoria.id).toBe(1);
  });

  it("deve lançar erro ao tentar criar categoria sem nome", () => {
    expect(() => new Categoria("")).toThrow("O nome da categoria não pode ser vazio");
  });

});

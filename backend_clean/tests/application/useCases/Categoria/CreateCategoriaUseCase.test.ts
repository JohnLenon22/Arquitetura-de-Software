import { Categoria } from "../../../../src/domain/entities/Categoria";
import { ICategoriaRepository } from "../../../../src/domain/repositories/ICategoriaRepository";
export class CreateCategoriaUseCase {
  constructor(private categoriaRepo: ICategoriaRepository) {}

  async execute(data: { nome: string }): Promise<Categoria> {
    const categoria = new Categoria(data.nome);
    return await this.categoriaRepo.create(categoria);
  }
}

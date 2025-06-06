import { ICategoriaRepository } from "../../../domain/repositories/ICategoriaRepository";
import { Categoria } from "../../../domain/entities/Categoria";
export class CreateCategoria{
    constructor(private categoriaRep: ICategoriaRepository){}

        async execute(nome: string): Promise<void>{
            const categoria = new Categoria(
                0,
                nome
            )
            await this.categoriaRep.create(categoria);
        }
}

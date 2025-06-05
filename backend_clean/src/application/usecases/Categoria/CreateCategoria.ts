import { ICategoriaRepository } from "../../../domain/repositories/ICategoriaRepository";
import { Categoria } from "../../../domain/entities/Categoria";
export class CreateCategoria{
    constructor(private categoriaRep: ICategoriaRepository){}

        async execute(id: number, nome: string){
            const categoria = new Categoria(
                id,
                nome, 
            )
            await this.categoriaRep.create(categoria);
        }
}

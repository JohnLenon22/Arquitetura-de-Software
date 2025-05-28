import { ICategoriaRepository } from "../../../domain/repositories/ICategoriaRepository";
import { Categoria } from "../../../domain/entities/Categoria";

export class UpdateCategoria{
    constructor(private categoriaRep: ICategoriaRepository){}
    
    async execute(id: string, nome: string){
        const categoria = new Categoria(id, nome);
        await this.categoriaRep.update(id, categoria);

    }
}
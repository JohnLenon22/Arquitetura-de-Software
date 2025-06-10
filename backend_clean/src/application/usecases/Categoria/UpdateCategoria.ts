import { ICategoriaRepository } from "../../../domain/repositories/ICategoriaRepository";
import { Categoria } from "../../../domain/entities/Categoria";

export class UpdateCategoria{
    constructor(private categoriaRep: ICategoriaRepository){}
    
    async execute(id: number, nome: string){
        const categoria = new Categoria(nome, id);
        await this.categoriaRep.update(id, categoria);

    }
}
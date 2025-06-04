import { ICategoriaRepository } from "../../../domain/repositories/ICategoriaRepository";

export class GetByIdCategoria{
    constructor(private categoriaRep: ICategoriaRepository){}

        async execute(id: string){
            return await this.categoriaRep.findById(id);
        }
}
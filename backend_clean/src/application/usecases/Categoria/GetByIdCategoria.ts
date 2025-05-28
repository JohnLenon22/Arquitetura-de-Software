import { ICategoriaRepository } from "../../../domain/repositories/ICategoriaRepository";

export class GetCategoria{
    constructor(private categoriaRep: ICategoriaRepository){}

        async execute(id: string){
            await this.categoriaRep.findById(id);
        }
}
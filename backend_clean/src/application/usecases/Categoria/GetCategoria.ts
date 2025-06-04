import { ICategoriaRepository } from "../../../domain/repositories/ICategoriaRepository";

export class GetCategoria{
    constructor(private categoriaRep: ICategoriaRepository){}

        async execute(){
            return await this.categoriaRep.findAll();
        }
}
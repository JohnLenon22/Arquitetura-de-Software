import { ICategoriaRepository } from "../../../domain/repositories/ICategoriaRepository";

export class CreateLocalArmazenamento{
    constructor(private categoriaRep: ICategoriaRepository){}

        async execute(){
            await this.categoriaRep.findAll();
        }
}
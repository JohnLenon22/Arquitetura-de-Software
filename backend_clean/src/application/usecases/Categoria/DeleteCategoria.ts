import { ICategoriaRepository } from "../../../domain/repositories/ICategoriaRepository";

export class DeleteCategoria{
    constructor(private categoriaRep: ICategoriaRepository){}

        async execute(id: number){
            await this.categoriaRep.delete(id);
        }
}

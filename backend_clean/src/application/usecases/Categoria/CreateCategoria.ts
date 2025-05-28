import { ICategoriaRepository } from "../../../domain/repositories/ICategoriaRepository";
import { Categoria } from "../../../domain/entities/Categoria";
import { randomUUID } from "crypto";

export class CreateCategoria{
    constructor(private categoriaRep: ICategoriaRepository){}

        async execute(nome: string){
            const categoria = new Categoria(
                randomUUID(),
                nome, 
            )
            await this.categoriaRep.create(categoria);
        }
}

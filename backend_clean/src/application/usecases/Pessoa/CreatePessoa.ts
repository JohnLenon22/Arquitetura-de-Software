import { IPessoaRepository } from "../../../domain/repositories/IPessoaRepository";
import { Pessoa } from "../../../domain/entities/Pessoa";
import { randomUUID } from "crypto";

export class CreatePessoa {
    constructor(private pessoaRep: IPessoaRepository){}

    async execute(nome: string){
        const pessoa = new Pessoa(
            randomUUID(),
            nome   
        )
        await this.pessoaRep.create(pessoa);
    }

}
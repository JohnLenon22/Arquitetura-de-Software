import { IPessoaRepository } from "../../../domain/repositories/IPessoaRepository";
import { Pessoa } from "../../../domain/entities/Pessoa";
import { randomUUID } from "crypto";
import { TipoPessoa } from '@prisma/client'; 


export class CreatePessoa {
    constructor(private pessoaRep: IPessoaRepository){}

    async execute(nome: string, tipoPessoa: TipoPessoa  ): Promise<void>{
        const pessoa = new Pessoa(
            randomUUID(),
            nome,
            tipoPessoa 

        )
        await this.pessoaRep.create(pessoa);
    }

}
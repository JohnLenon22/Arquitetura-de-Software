import { IPessoaRepository } from "../../../domain/repositories/IPessoaRepository";
import { Pessoa } from "../../../domain/entities/Pessoa";
import { TipoPessoa } from "@prisma/client";

export class UpdatePessoa {
    constructor(private pessoaRep: IPessoaRepository){}

    async execute(id:string, nome: string, tipoPessoa: TipoPessoa){
        const pessoa = new Pessoa(id, nome, tipoPessoa)
        return await this.pessoaRep.update(id, pessoa)
    }
}
import { IPessoaRepository } from "../../../domain/repositories/IPessoaRepository";
import { Pessoa } from "../../../domain/entities/Pessoa";

export class UpdatePessoa{
    constructor(private pessoaRep: IPessoaRepository){}

    async execute(id:string, nome: string){
        const pessoa = new Pessoa(id, nome)
        await this.pessoaRep.update(id, pessoa)
    }
}
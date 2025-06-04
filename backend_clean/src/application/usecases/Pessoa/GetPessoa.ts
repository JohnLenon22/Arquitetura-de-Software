import { IPessoaRepository } from "../../../domain/repositories/IPessoaRepository";

export class GetPessoa {
    constructor(private pessoaRep: IPessoaRepository){}

    async execute(){
        return await this.pessoaRep.findAll();
    }

}
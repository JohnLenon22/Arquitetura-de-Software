import { IPessoaRepository } from "../../../domain/repositories/IPessoaRepository";

export class GetByIdPessoa {
    constructor(private pessoaRep: IPessoaRepository){}

    async execute(id: string){
        return await this.pessoaRep.findById(id);
    }

}
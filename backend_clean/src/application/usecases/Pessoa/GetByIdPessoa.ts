import { IPessoaRepository } from "../../../domain/repositories/IPessoaRepository";

export class GetByIdPessoa {
    constructor(private pessoaRep: IPessoaRepository){}

    async execute(id: string){
        await this.pessoaRep.delete(id);
    }

}
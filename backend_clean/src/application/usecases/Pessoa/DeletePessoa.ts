import { IPessoaRepository } from "../../../domain/repositories/IPessoaRepository";

export class DeletePessoa {
    constructor(private pessoaRep: IPessoaRepository){}

    async execute(id: string){
        await this.pessoaRep.delete(id);
    }

}
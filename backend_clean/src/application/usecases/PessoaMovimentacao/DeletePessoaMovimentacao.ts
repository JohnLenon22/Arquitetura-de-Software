import { IPessoaMovimentacaoRepository } from "../../../domain/repositories/IPessoaMovimentacaoRepository";

export class DeletePessoaMovimentacao {
    constructor(private pessoaMovimentacaoRep: IPessoaMovimentacaoRepository){}

    async execute(id: string){
        await this.pessoaMovimentacaoRep.delete(id);
    }

}
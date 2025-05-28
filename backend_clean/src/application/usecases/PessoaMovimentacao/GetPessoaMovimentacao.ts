import { IPessoaMovimentacaoRepository } from "../../../domain/repositories/IPessoaMovimentacaoRepository";

export class GetPessoaMovimentacao {
    constructor(private pessoaMovimentacaoRep: IPessoaMovimentacaoRepository){}

    async execute(){
        await this.pessoaMovimentacaoRep.findAll();
    }

}
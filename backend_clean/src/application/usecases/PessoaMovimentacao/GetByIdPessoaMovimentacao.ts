import { IPessoaMovimentacaoRepository } from "../../../domain/repositories/IPessoaMovimentacaoRepository";

export class GetByIdPessoaMovimentacao {
    constructor(private pessoaMovimentacaoRep: IPessoaMovimentacaoRepository){}

    async execute(id: string){
        return await this.pessoaMovimentacaoRep.findById(id);
    }

}
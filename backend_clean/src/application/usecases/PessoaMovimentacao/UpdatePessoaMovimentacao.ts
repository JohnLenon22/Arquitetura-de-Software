import { IPessoaMovimentacaoRepository } from "../../../domain/repositories/IPessoaMovimentacaoRepository";
import { PessoaMovimentacao } from "../../../domain/entities/PessoaMovimentacao";
export class UpdatePessoaMovimentacao{
    constructor(private pessoaMovimentacaoRep: IPessoaMovimentacaoRepository){}

    async execute(id:string, idPessoa:string, idMovimentacao:string){
        const pessoaMovimentacao = new PessoaMovimentacao(id, idPessoa, idMovimentacao)
        await this.pessoaMovimentacaoRep.update(id, pessoaMovimentacao)
    }
}
import { IPessoaMovimentacaoRepository } from "../../../domain/repositories/IPessoaMovimentacaoRepository";
import { PessoaMovimentacao } from "../../../domain/entities/PessoaMovimentacao";
import { randomUUID } from "crypto";

export class CreatePessoaMovimentacao {
    constructor(private pessoaMovimentacaoRep: IPessoaMovimentacaoRepository){}

    async execute(idPessoa: string, idMovimentacao: string){
        const pessoaMovimentacao = new PessoaMovimentacao(
            randomUUID(),
            idPessoa,
            idMovimentacao
        )
        await this.pessoaMovimentacaoRep.create(pessoaMovimentacao);
    }

}
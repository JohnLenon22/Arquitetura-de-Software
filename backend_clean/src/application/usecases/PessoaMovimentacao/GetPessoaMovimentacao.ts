import { IPessoaMovimentacaoRepository } from "../../../domain/repositories/IPessoaMovimentacaoRepository";
import { ListPessoaMovimentacaoInputDto, ListPessoaMovimentacaoOutputDto } from "../../dto/PessoaMovimentacao/ListPessoaMovimentacaoDto";
import { UseCase } from "../UseCase";
export class GetPessoaMovimentacao implements UseCase<ListPessoaMovimentacaoInputDto, ListPessoaMovimentacaoOutputDto>{
    constructor(private pessoaMovimentacaoRep: IPessoaMovimentacaoRepository){}

    async execute(): Promise<ListPessoaMovimentacaoOutputDto>{
        const pessoasMovimentacao = await this.pessoaMovimentacaoRep.findAll();
        const OutputDTO: ListPessoaMovimentacaoOutputDto = pessoasMovimentacao.map( pm => ({
            id: pm.id,
            idPessoa: pm.idPessoa,
            idMovimentacao: pm.idMovimentacao,
        }))
        return OutputDTO;
    }

}
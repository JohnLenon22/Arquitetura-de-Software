import { IPessoaMovimentacaoRepository } from "../../../domain/repositories/IPessoaMovimentacaoRepository";
import { PessoaMovimentacao } from "../../../domain/entities/PessoaMovimentacao";
import { UpdatePessoaMovimentacaoInputDto, UpdatePessoaMovimentacaoOutputDto } from "../../dto/PessoaMovimentacao/UpdatePessoaMovimentacaoDto";
import { UseCase } from "../UseCase";

export class UpdatePessoaMovimentacao implements UseCase<UpdatePessoaMovimentacaoInputDto, UpdatePessoaMovimentacaoOutputDto>{
    constructor(private pessoaMovimentacaoRep: IPessoaMovimentacaoRepository){}

    async execute(InputDTO: UpdatePessoaMovimentacaoInputDto): Promise<UpdatePessoaMovimentacaoOutputDto>{
        const pessoaMovimentacao = new PessoaMovimentacao(InputDTO.id, InputDTO.idPessoa, InputDTO.idMovimentacao)
        await this.pessoaMovimentacaoRep.update(InputDTO.id, pessoaMovimentacao)
        const OutputDTO: UpdatePessoaMovimentacaoOutputDto = {message: `Pessoa Movimentação atualizada com sucesso\nID: ${pessoaMovimentacao.id}`}
        return OutputDTO;
    }
}
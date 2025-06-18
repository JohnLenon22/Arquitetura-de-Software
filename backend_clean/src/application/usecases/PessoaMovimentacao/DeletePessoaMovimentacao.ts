import { IPessoaMovimentacaoRepository } from "../../../domain/repositories/IPessoaMovimentacaoRepository";
import { DeletePessoaMovimentacaoInputDto, DeletePessoaMovimentacaoOutputDto } from "../../dto/PessoaMovimentacao/DeletePessoaMovimentacaoDto";
import { UseCase } from "../UseCase";
export class DeletePessoaMovimentacao implements UseCase<DeletePessoaMovimentacaoInputDto, DeletePessoaMovimentacaoOutputDto>{
    constructor(private pessoaMovimentacaoRep: IPessoaMovimentacaoRepository){}

    async execute(InputDTO: DeletePessoaMovimentacaoInputDto): Promise<DeletePessoaMovimentacaoOutputDto>{
        await this.pessoaMovimentacaoRep.delete(InputDTO.id);
        const OutputDTO: DeletePessoaMovimentacaoOutputDto = {message: `Pessoa Movimentação deletada com sucesso`};
        return OutputDTO;
    }

}
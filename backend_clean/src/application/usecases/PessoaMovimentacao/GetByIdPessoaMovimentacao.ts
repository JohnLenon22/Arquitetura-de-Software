import { IPessoaMovimentacaoRepository } from "../../../domain/repositories/IPessoaMovimentacaoRepository";
import { GetByIdPessoaMovimentacaoInputDto, GetByIdPessoaMovimentacaoOutputDto } from "../../dto/PessoaMovimentacao/GetByIdPessoaMovimentacaoDto";
import { UseCase } from "../UseCase";
export class GetByIdPessoaMovimentacao implements UseCase<GetByIdPessoaMovimentacaoInputDto, GetByIdPessoaMovimentacaoOutputDto>{
    constructor(private pessoaMovimentacaoRep: IPessoaMovimentacaoRepository){}

    async execute(InputDTO: GetByIdPessoaMovimentacaoInputDto): Promise<GetByIdPessoaMovimentacaoOutputDto>{
        const pessoaMovimentacao = await this.pessoaMovimentacaoRep.findById(InputDTO.id);
        if(pessoaMovimentacao){
            const OutputDto: GetByIdPessoaMovimentacaoOutputDto = {
                idPessoa: pessoaMovimentacao.idPessoa, 
                idMovimentacao: pessoaMovimentacao.idMovimentacao
            };
            return OutputDto;
        }else{
            throw new Error('Pessoa Movimentacao não encontrada');
        }
        
    }

}
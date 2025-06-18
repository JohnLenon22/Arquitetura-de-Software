import { IPessoaMovimentacaoRepository } from "../../../domain/repositories/IPessoaMovimentacaoRepository";
import { PessoaMovimentacao } from "../../../domain/entities/PessoaMovimentacao";
import { randomUUID } from "crypto";
import { CreatePessoaMovimentacaoInputDto, CreatePessoaMovimentacaoOutputDto } from "../../dto/PessoaMovimentacao/CreatePessoaMovimentacaoDto";
import { UseCase } from "../UseCase";


export class CreatePessoaMovimentacao implements UseCase<CreatePessoaMovimentacaoInputDto, CreatePessoaMovimentacaoOutputDto>{
    constructor(private pessoaMovimentacaoRep: IPessoaMovimentacaoRepository){}

    async execute(InputDTO: CreatePessoaMovimentacaoInputDto): Promise<CreatePessoaMovimentacaoOutputDto>{
        const pessoaMovimentacao = new PessoaMovimentacao(
            randomUUID(),
            InputDTO.idPessoa,
            InputDTO.idMovimentacao
        )
        await this.pessoaMovimentacaoRep.create(pessoaMovimentacao);
        const OutputDTO: CreatePessoaMovimentacaoOutputDto = {message: `Pessoa criada com sucesso`};
        return OutputDTO;
    }

}
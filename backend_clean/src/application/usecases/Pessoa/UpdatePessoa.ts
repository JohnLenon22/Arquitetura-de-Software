import { IPessoaRepository } from "../../../domain/repositories/IPessoaRepository";
import { Pessoa } from "../../../domain/entities/Pessoa";
import { TipoPessoa } from "@prisma/client";
import { UpdatePessoaInputDto, UpdatePessoaOutputDto } from "../../dto/Pessoa/UpdatePessoaDto";
import { UseCase } from "../UseCase";
export class UpdatePessoa implements UseCase<UpdatePessoaInputDto, UpdatePessoaOutputDto>{
    constructor(private pessoaRep: IPessoaRepository){}

    async execute(InputDTO: UpdatePessoaInputDto): Promise<UpdatePessoaOutputDto>{
        const pessoa = new Pessoa(InputDTO.id, InputDTO.nome, InputDTO.tipoPessoa)
        await this.pessoaRep.update(InputDTO.id, pessoa)
        const OutputDTO: UpdatePessoaOutputDto = {message: `Pessoa atualizada com sucesso\nID: ${pessoa.id}`}
        return OutputDTO;
    }
}
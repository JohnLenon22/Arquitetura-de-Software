import { IPessoaRepository } from "../../../domain/repositories/IPessoaRepository";
import { Pessoa } from "../../../domain/entities/Pessoa";
import { randomUUID } from "crypto";
import { TipoPessoa } from '@prisma/client'; 
import { CreatePessoaInputDto, CreatePessoaOutputDto } from "../../dto/Pessoa/CreatePessoaDto";
import { UseCase } from "../UseCase";

export class CreatePessoa implements UseCase<CreatePessoaInputDto, CreatePessoaOutputDto>{
    constructor(private pessoaRep: IPessoaRepository){}

    async execute(InputDTO: CreatePessoaInputDto): Promise<CreatePessoaOutputDto>{
        const pessoa = new Pessoa(
            randomUUID(),
            InputDTO.nome,
            InputDTO.tipoPessoa 

        )
        await this.pessoaRep.create(pessoa);
        const OutputDTO: CreatePessoaOutputDto = {message: `Pessoa criada com sucesso`,}
        return OutputDTO;
    }

}
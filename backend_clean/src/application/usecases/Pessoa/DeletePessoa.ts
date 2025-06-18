import { IPessoaRepository } from "../../../domain/repositories/IPessoaRepository";
import { DeletePessoaInputDto, DeletePessoaOutputDto } from "../../dto/Pessoa/DeletePessoaDto";
import { UseCase } from "../UseCase";

export class DeletePessoa implements UseCase<DeletePessoaInputDto, DeletePessoaOutputDto>{
    constructor(private pessoaRep: IPessoaRepository){}

    async execute(InputDTO: DeletePessoaInputDto): Promise<DeletePessoaOutputDto>{
        await this.pessoaRep.delete(InputDTO.id);
        const OutputDTO:DeletePessoaOutputDto={message:`Pessoa deletada com sucesso`}
        return OutputDTO;
    }

}
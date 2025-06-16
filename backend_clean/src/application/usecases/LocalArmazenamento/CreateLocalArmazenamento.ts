import { ILocalArmazenamentoRepository } from "../../../domain/repositories/ILocalArmazenamentoRepository";
import { CreateLocalArmazenamentoInputDto } from "../../dto/LocalArmazenamento/CreateLocalArmazenamentoDto";
import { CreateLocalArmazenamentoOutputDto } from "../../dto/LocalArmazenamento/CreateLocalArmazenamentoDto";
import { LocalArmazenamento } from "../../../domain/entities/LocalArmazenamento";
import { randomUUID } from "crypto";
import { UseCase } from "../UseCase";
export class CreateLocalArmazenamento implements UseCase<CreateLocalArmazenamentoInputDto, CreateLocalArmazenamentoOutputDto>{
    constructor(private localArmazenamentoRep: ILocalArmazenamentoRepository){}
    
        async execute(InputDTO: CreateLocalArmazenamentoInputDto): Promise<CreateLocalArmazenamentoOutputDto>{
            const localArmazenamento = new LocalArmazenamento(
                randomUUID(),
                InputDTO.nome, 
                InputDTO.endereco,
                InputDTO.responsavel
            )
            await this.localArmazenamentoRep.create(localArmazenamento);

            const OutputDTO: CreateLocalArmazenamentoOutputDto = { id: localArmazenamento.id }
            return OutputDTO;
        }
}

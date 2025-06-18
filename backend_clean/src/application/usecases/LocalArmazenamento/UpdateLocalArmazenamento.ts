import { ILocalArmazenamentoRepository } from "../../../domain/repositories/ILocalArmazenamentoRepository";
import { UpdateLocalArmazenamentoInputDto } from "../../dto/LocalArmazenamento/UpdateLocalArmazenamentoDto";
import { UpdateLocalArmazenamentoOutputDto } from "../../dto/LocalArmazenamento/UpdateLocalArmazenamentoDto";
import { LocalArmazenamento } from "../../../domain/entities/LocalArmazenamento";
import { UseCase } from "../UseCase";
export class UpdateLocalArmazenamento implements UseCase<UpdateLocalArmazenamentoInputDto, UpdateLocalArmazenamentoOutputDto>{
    constructor(private localArmazenamentoRep: ILocalArmazenamentoRepository){}
    
        async execute(InputDTO: UpdateLocalArmazenamentoInputDto): Promise<UpdateLocalArmazenamentoOutputDto>{
            const localArmazenamento = new LocalArmazenamento(InputDTO.id,InputDTO.nome, InputDTO.endereco, InputDTO.responsavel)
            await this.localArmazenamentoRep.update(InputDTO.id, localArmazenamento);

            const OutputDTO: UpdateLocalArmazenamentoOutputDto = {message: `Local armazenamento atualizado com sucesso\nID: ${localArmazenamento.nome}`};
            return OutputDTO;
        }
}

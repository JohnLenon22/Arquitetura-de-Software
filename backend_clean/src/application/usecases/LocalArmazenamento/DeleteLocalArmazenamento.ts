import { ILocalArmazenamentoRepository } from "../../../domain/repositories/ILocalArmazenamentoRepository";
import { DeleteLocalArmazenamentoInputDto, DeleteLocalArmazenamentoOutputDto } from "../../dto/LocalArmazenamento/DeleteLocalArmazenamentoDto";
import { UseCase } from "../UseCase";

export class DeleteLocalArmazenamento implements UseCase<DeleteLocalArmazenamentoInputDto, DeleteLocalArmazenamentoOutputDto>{
    constructor(private localArmazenamentoRep: ILocalArmazenamentoRepository){}
    
        async execute(InputDTO: DeleteLocalArmazenamentoInputDto): Promise<DeleteLocalArmazenamentoOutputDto>{
            await this.localArmazenamentoRep.delete(InputDTO.id);

            const OutputDTO: DeleteLocalArmazenamentoOutputDto = {message:`Local de ID:${InputDTO.id} deletado com sucesso` };
            return OutputDTO;
        }
}

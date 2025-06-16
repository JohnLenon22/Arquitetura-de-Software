import { ILocalArmazenamentoRepository } from "../../../domain/repositories/ILocalArmazenamentoRepository";
import { GetByIdLocalArmazenamentoInputDto } from "../../dto/LocalArmazenamento/GetByIdLocalArmazenamentoDto";
import { GetByIdLocalArmazenamentoOutputDto } from "../../dto/LocalArmazenamento/GetByIdLocalArmazenamentoDto";

import { UseCase } from "../UseCase";
export class GetByIdLocalArmazenamento implements UseCase<GetByIdLocalArmazenamentoInputDto, GetByIdLocalArmazenamentoOutputDto>{
    constructor(private localArmazenamentoRep: ILocalArmazenamentoRepository){}
    
        async execute(InputDTO: GetByIdLocalArmazenamentoInputDto): Promise<GetByIdLocalArmazenamentoOutputDto>{
            await this.localArmazenamentoRep.findById(InputDTO.id);

            const OutputDTO: GetByIdLocalArmazenamentoOutputDto = {message: `Local Armazenamento com ID:${InputDTO.id} encontrado com sucesso`}
            return OutputDTO;
        }
}

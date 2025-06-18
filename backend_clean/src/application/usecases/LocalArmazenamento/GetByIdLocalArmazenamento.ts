import { ILocalArmazenamentoRepository } from "../../../domain/repositories/ILocalArmazenamentoRepository";
import { GetByIdLocalArmazenamentoInputDto } from "../../dto/LocalArmazenamento/GetByIdLocalArmazenamentoDto";
import { GetByIdLocalArmazenamentoOutputDto } from "../../dto/LocalArmazenamento/GetByIdLocalArmazenamentoDto";

import { UseCase } from "../UseCase";
export class GetByIdLocalArmazenamento implements UseCase<GetByIdLocalArmazenamentoInputDto, GetByIdLocalArmazenamentoOutputDto>{
    constructor(private localArmazenamentoRep: ILocalArmazenamentoRepository){}
    
        async execute(InputDTO: GetByIdLocalArmazenamentoInputDto): Promise<GetByIdLocalArmazenamentoOutputDto>{
            const local = await this.localArmazenamentoRep.findById(InputDTO.id);
            if(local){
                const OutputDTO: GetByIdLocalArmazenamentoOutputDto = {nome: local.nome, endereco: local.endereco, responsavel: local.responsavel};
                return OutputDTO;
            }else{
                throw new Error('Local não encontrado');
            }
            
        }
}

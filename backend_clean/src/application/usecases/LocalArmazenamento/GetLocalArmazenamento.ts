import { ILocalArmazenamentoRepository } from "../../../domain/repositories/ILocalArmazenamentoRepository";
import { ListLocaArmazenamentoInputDto } from "../../dto/LocalArmazenamento/ListLocaArmazenamentoDto";
import { ListLocaArmazenamentoOutputDto } from "../../dto/LocalArmazenamento/ListLocaArmazenamentoDto";
import { UseCase } from "../UseCase";

export class GetLocalArmazenamento implements UseCase<ListLocaArmazenamentoInputDto, ListLocaArmazenamentoOutputDto>{
    constructor(private localArmazenamentoRep: ILocalArmazenamentoRepository){}
    
    async execute(InputDTO: ListLocaArmazenamentoInputDto): Promise<ListLocaArmazenamentoOutputDto>{
        const locais = await this.localArmazenamentoRep.findAll();

        const OutputDTO: ListLocaArmazenamentoOutputDto = locais.map( local => {
            return {
                id: local.id,
                nome: local.nome,
                endereco: local.endereco,
                responsavel: local.responsavel
            }
        });

        return OutputDTO;
            
    }
}

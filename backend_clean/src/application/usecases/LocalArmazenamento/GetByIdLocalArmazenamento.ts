import { ILocalArmazenamentoRepository } from "../../../domain/repositories/ILocalArmazenamentoRepository";

export class GetByIdLocalArmazenamento{
    constructor(private localArmazenamentoRep: ILocalArmazenamentoRepository){}
    
        async execute(id: string){
            return await this.localArmazenamentoRep.findById(id);
        }
}

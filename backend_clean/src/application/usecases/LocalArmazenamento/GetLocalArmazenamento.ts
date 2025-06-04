import { ILocalArmazenamentoRepository } from "../../../domain/repositories/ILocalArmazenamentoRepository";

export class GetLocalArmazenamento{
    constructor(private localArmazenamentoRep: ILocalArmazenamentoRepository){}
    
        async execute(){
            return await this.localArmazenamentoRep.findAll();
        }
}

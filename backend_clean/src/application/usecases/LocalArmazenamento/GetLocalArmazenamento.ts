import { ILocalArmazenamentoRepository } from "../../../domain/repositories/ILocalArmazenamentoRepository";

export class GetLocalArmazenamento{
    constructor(private localArmazenamentoRep: ILocalArmazenamentoRepository){}
    
        async execute(){
            await this.localArmazenamentoRep.findAll();
        }
}

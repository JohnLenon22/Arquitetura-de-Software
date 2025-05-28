import { ILocalArmazenamentoRepository } from "../../../domain/repositories/ILocalArmazenamentoRepository";

export class DeleteLocalArmazenamento{
    constructor(private localArmazenamentoRep: ILocalArmazenamentoRepository){}
    
        async execute(id: string){
            await this.localArmazenamentoRep.delete(id);
        }
}

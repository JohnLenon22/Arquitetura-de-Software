import { ILocalArmazenamentoRepository } from "../../../domain/repositories/ILocalArmazenamentoRepository";
import { LocalArmazenamento } from "../../../domain/entities/LocalArmazenamento";

export class UpdateLocalArmazenamento{
    constructor(private localArmazenamentoRep: ILocalArmazenamentoRepository){}
    
        async execute(id:string, nome: string , endereco: string, responsavel: string){
            const localArmazenamento = new LocalArmazenamento(id, nome, endereco, responsavel)
            await this.localArmazenamentoRep.update(id, localArmazenamento);
        }
}

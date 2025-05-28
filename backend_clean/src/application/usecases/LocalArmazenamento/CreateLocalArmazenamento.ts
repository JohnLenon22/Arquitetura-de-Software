import { ILocalArmazenamentoRepository } from "../../../domain/repositories/ILocalArmazenamentoRepository";
import { LocalArmazenamento } from "../../../domain/entities/LocalArmazenamento";
import { randomUUID } from "crypto";

export class CreateLocalArmazenamento{
    constructor(private localArmazenamentoRep: ILocalArmazenamentoRepository){}
    
        async execute(nome: string , endereco: string, responsavel: string){
            const localArmazenamento = new LocalArmazenamento(
                randomUUID(),
                nome, 
                endereco,
                responsavel
            )
            await this.localArmazenamentoRep.create(localArmazenamento);
        }
}

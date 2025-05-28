import { IMovimentacaoEstoqueRepository } from "../../../domain/repositories/IMovimentaoEstoqueRepository";
import { MovimentacaoEstoque } from "../../../domain/entities/MovimentacaoEstoque";
import { randomUUID } from "crypto";

export class CreateMovimentacaoEstoque{
    constructor(private movimentacaoEstoqueRep: IMovimentacaoEstoqueRepository){}
    
        async execute(tipo: string , quantidade: number, data: Date, idProduto: string, idUsuario: string, idUsuarioMovimentacao: string, idLocalArmazenamento: string){
            const movimentacaoEstoque = new MovimentacaoEstoque(
                randomUUID(),
                idProduto, 
                idUsuario,
                idUsuarioMovimentacao,
                idLocalArmazenamento,
                tipo,
                quantidade,
                data
            )
            await this.movimentacaoEstoqueRep.create(movimentacaoEstoque);
        }
}

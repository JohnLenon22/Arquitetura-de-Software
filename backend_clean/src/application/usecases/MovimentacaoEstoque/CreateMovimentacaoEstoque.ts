import { IMovimentacaoEstoqueRepository } from "../../../domain/repositories/IMovimentaoEstoqueRepository";
import { MovimentacaoEstoque } from "../../../domain/entities/MovimentacaoEstoque";
import { randomUUID } from "crypto";
import { TipoMovimentacao } from "@prisma/client";

export class CreateMovimentacaoEstoque{
    constructor(private movimentacaoEstoqueRep: IMovimentacaoEstoqueRepository){}
    
        async execute(tipoMovimentacao: TipoMovimentacao , quantidade: number, data: Date, idProduto: string, idUsuario: string, idUsuarioMovimentacao: string, idLocalArmazenamento: string){
            const movimentacaoEstoque = new MovimentacaoEstoque(
                randomUUID(),
                idProduto, 
                idUsuario,
                idUsuarioMovimentacao,
                idLocalArmazenamento,
                tipoMovimentacao,
                quantidade,
                data
            )
            await this.movimentacaoEstoqueRep.create(movimentacaoEstoque);
        }
}

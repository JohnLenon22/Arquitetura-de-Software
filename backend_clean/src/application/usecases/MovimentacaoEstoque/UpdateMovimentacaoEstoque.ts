import { IMovimentacaoEstoqueRepository } from "../../../domain/repositories/IMovimentaoEstoqueRepository";
import { MovimentacaoEstoque } from "../../../domain/entities/MovimentacaoEstoque";
import { TipoMovimentacao } from "@prisma/client";

export class UpdateMovimentacaoEstoque{
    constructor(private movimentacaoEstoqueRep: IMovimentacaoEstoqueRepository){}
    
        async execute(id: string, tipoMovimentacao: TipoMovimentacao , quantidade: number, data: Date, idProduto: string, idUsuario: string, idUsuarioMovimentacao: string, idLocalArmazenamento: string){
            const movimentacaoEstoque = new MovimentacaoEstoque( id, idProduto, idUsuario,idUsuarioMovimentacao, idLocalArmazenamento, tipoMovimentacao, quantidade, data)
            await this.movimentacaoEstoqueRep.update(id, movimentacaoEstoque);
        }
}
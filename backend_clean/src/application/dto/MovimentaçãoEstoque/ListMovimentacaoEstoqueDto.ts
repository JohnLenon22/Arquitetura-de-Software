import { TipoMovimentacao } from "@prisma/client"

export type ListMovimentacaoEstoqueInputDto = void
export type ListMovimentacaoEstoqueOutputDto = {
    id: string,
    idProduto: string,
    idUsuario: string,
    idLocalArmazenamento: string,
    idUsuarioMovimentacao: string,
    tipoMovimentacao: TipoMovimentacao,
    quantidade: number,
    data: Date 
}[];
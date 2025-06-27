import { TipoMovimentacao } from "@prisma/client"

export type ListMovimentacaoEstoqueInputDto = void
export type ListMovimentacaoEstoqueOutputDto = {
    data: Date,
    idProduto: string,
    idUsuario: string,
    idPessoa: string,
    tipoMovimentacao: TipoMovimentacao,
    quantidade: number,
    idLocalArmazenamento: string,
    idLocalArmazenamentoDestino: string, 
    
}[];
import { TipoMovimentacao } from "@prisma/client"

export type  CreateMovimentacaoEstoqueInputDto = {
    idProduto: string,
    idUsuario: string,
    idLocalArmazenamento: string,
    idUsuarioMovimentacao: string,
    tipoMovimentacao: TipoMovimentacao,
    quantidade: number,
    data: Date 
}

export type  CreateLocalArmazenamentoOutputDto = {
    id: string
}
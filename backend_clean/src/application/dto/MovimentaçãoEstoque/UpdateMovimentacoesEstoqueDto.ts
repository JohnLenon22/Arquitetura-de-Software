import { TipoMovimentacao } from "@prisma/client"

export type UpdateMovimentacoesEstoqueInputDto = {
    id: string,
    idProduto: string,
    idUsuario: string,
    idLocalArmazenamento: string,
    tipoMovimentacao: TipoMovimentacao,
    quantidade: number,
    data: Date 
}

export type UpdateMovimentacoesEstoqueOutputDto = {
    message: string
}
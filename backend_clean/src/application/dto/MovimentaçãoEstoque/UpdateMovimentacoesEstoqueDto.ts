import { TipoMovimentacao } from "@prisma/client"

export type UpdateMovimentacoesEstoqueInputDto = {
    id: string,
    idProduto: string,
    idUsuario: string,
    idPessoa: string,
    idLocalArmazenamento: string,
    tipoMovimentacao: TipoMovimentacao,
    quantidade: number,
    idLocalArmazenamentoDestino: string,
    data: Date,

}

export type UpdateMovimentacoesEstoqueOutputDto = {
    message: string
}
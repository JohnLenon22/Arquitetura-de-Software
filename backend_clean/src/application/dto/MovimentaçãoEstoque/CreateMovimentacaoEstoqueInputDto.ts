import { TipoMovimentacao } from "@prisma/client"

export type  CreateMovimentacaoEstoqueInputDto = {
    data: Date,
    idProduto: string,
    idUsuario: string,
    idPessoa: string,
    tipoMovimentacao: TipoMovimentacao,
    quantidade: number,
    idLocalArmazenamento: string,
    idLocalArmazenamentoDestino: string, 

}

export type  CreateMovimentacaoEstoqueOutputDto = {
    message: string;
}
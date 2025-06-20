import { TipoMovimentacao } from "@prisma/client"

export type  CreateMovimentacaoEstoqueInputDto = {
    idProduto: string,
    idUsuario: string,
    idLocalArmazenamento: string,
    tipoMovimentacao: TipoMovimentacao,
    quantidade: number,
    data: Date 
}

export type  CreateMovimentacaoEstoqueOutputDto = {
    message: string;
}
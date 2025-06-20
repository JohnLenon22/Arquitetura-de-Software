import { TipoMovimentacao } from "@prisma/client";

export type GetByIdMovimentacaoEstoqueInputDto = {
    id: string;
}

export type GetByIdMovimentacaoEstoqueOutputDto = {
    idProduto: string,
    idUsuario: string,
    idLocalArmazenamento: string,
    tipoMovimentacao: TipoMovimentacao,
    quantidade: number,
    data: Date 
}[]
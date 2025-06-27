import { TipoMovimentacao } from "@prisma/client";

export type GetByIdMovimentacaoEstoqueInputDto = {
    id: string;
}

export type GetByIdMovimentacaoEstoqueOutputDto = {
    idProduto: string,
    idUsuario: string,
    idPessoa: string,
    tipoMovimentacao: TipoMovimentacao,
    quantidade: number,
    idLocalArmazenamento: string,
    idLocalArmazenamentoDestino: string, 
    data: Date,
}[]
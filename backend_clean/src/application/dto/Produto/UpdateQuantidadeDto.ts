import { TipoMovimentacao } from "@prisma/client";

export type UpdateQuantidadeProdutoInputDto = {
    id: string;
    quantidade: number;
    tipoMovimentacao: TipoMovimentacao
}

export type UpdateQuantidadeProdutoOutputDto = {
    message: string;
}
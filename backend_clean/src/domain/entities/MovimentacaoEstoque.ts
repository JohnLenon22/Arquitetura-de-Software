import { TipoMovimentacao } from "@prisma/client";

export class MovimentacaoEstoque{
    constructor(
        public readonly id: string,
        public readonly idProduto: string,
        public readonly idUsuario: string,
        public readonly idPessoa: string,
        public readonly idLocalArmazenamento: string,
        public tipoMovimentacao: TipoMovimentacao,
        public quantidade: number,
        public data: Date = new Date(),
        public readonly idLocalArmazenamentoDestino?: string
    ){
        if (quantidade < 0) {
            throw new Error("Quantidade não pode ser zero")
        }
    }
}


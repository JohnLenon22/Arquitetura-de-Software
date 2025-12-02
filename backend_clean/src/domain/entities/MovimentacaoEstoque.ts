import { TipoMovimentacao } from "@prisma/client";

export class MovimentacaoEstoque{
    constructor(
        public readonly id: string,
        public data: Date = new Date(),
        public readonly idProduto: string,
        public readonly idUsuario: string,
        public tipoMovimentacao: TipoMovimentacao,
        public quantidade: number,
        public readonly idLocalArmazenamento: string,
        public readonly idLocalArmazenamentoDestino?: string,
        public readonly idPessoa?: string,
    ){
        if (quantidade < 0) {
            throw new Error("Quantidade não pode ser menor ou igual a zero")
        } 
        if (!Object.values(TipoMovimentacao).includes(tipoMovimentacao)) {
            throw new Error("O tipo de movimentação não pode ser diferente de ENTRADA/TRANSFERENCIA/SAIDA")
        }
        if (data > new Date()) {
            throw new Error("A data de cadastro não pode ser uma data futura");
        }
    }
}


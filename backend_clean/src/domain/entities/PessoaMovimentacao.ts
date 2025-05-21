export class PessoaMovimentacao{
    constructor(
        public readonly id: string,
        public readonly idPessoa: string,
        public readonly idMovimentacao: string
    ){}
}
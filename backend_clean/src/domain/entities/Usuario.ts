export class Usuario{
    constructor(
        public readonly id: string,
        public idPessoa: string,
        public email: string,
        public senhaHash: string
    ){}
}
export class Usuario{
    constructor(
        public readonly id: string,
        public idPessoa: string,
        public email: string,
        public senhaHash: string
    ){
        if (senhaHash.length < 8) throw new Error("Senha deve conter no mínimo 8 caracteres")
    }
}
export class Pessoa{
    constructor(
        public readonly id: string,
        public nome: string,
        public cliente: boolean,
        public funcionario: boolean,
    ){}
}
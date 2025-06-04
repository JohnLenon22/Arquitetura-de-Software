import { TipoPessoa } from "@prisma/client";

export class Pessoa{
    constructor(
        public readonly id: string,
        public nome: string,
        public tipoPessoa: TipoPessoa

    ){}
}
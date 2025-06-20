import { TipoPessoa } from "@prisma/client";

export class Pessoa{
    constructor(
        public readonly id: string,
        public nome: string,
        public tipoPessoa: TipoPessoa

    ){
        if(!nome || nome.trim() === "" ){
            throw new Error("O nome da pessoa não pode ser vazio");
        }
    }
}
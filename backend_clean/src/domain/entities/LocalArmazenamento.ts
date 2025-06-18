export class LocalArmazenamento{
    constructor(
        public readonly id: string,
        public nome: string,
        public endereco: string,
        public responsavel: string
    ){
        if(!nome || nome.trim() === "" ){
            throw new Error("O nome da categoria não pode ser vazio");
        }else if(!endereco || endereco.trim() === "" ){
            throw new Error("O endereco da categoria não pode ser vazio");
        }else if(!responsavel || responsavel.trim() === "" ){
            throw new Error("O endereco da categoria não pode ser vazio");
        }
    }
}
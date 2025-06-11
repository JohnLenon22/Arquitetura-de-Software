export class Categoria {
    constructor(
        public nome: string,
        public readonly id?: number 
    ) {
        if(!nome || nome.trim() === "" ){
            throw new Error("O nome da categoria não pode ser vazio");
        }
    }
}
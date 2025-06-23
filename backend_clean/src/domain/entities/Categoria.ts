export class Categoria {
    constructor(
        public nome: string,
        public id?: number,
    ) {
        if(!nome) {
            throw new Error("O nome da categoria não pode ser vazio");
        }
    }
}
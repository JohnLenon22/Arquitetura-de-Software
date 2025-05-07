export class Produto {
    constructor(
        public readonly id: string,
        public nome: string,
        public preco: number,
        public descricao: string,
        public quantidadeEstoque: number,
        public categoriaId: number

    ){
        if (preco < 0) throw new Error("Preço inválido");
        if (quantidadeEstoque < 0) throw new Error("Estoque inválido"); 
    }
}   
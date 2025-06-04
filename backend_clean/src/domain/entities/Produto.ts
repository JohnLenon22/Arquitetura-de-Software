export class Produto {
    constructor(
        public readonly id: string,
        public nome: string,
        public dataCadastro: Date,
        public precoVenda: number,
        public precoCompra: number,
        public descricao: string,
        public quantidadeEstoque: number,
        public idCategoria: string

    ){
        if (precoVenda && precoCompra < 0) throw new Error("Preço inválido");
        if (quantidadeEstoque < 0) throw new Error("Estoque inválido"); 
    }
}   
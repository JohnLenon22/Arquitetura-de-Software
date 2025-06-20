export class Produto {
    constructor(
        public readonly id: string,
        public nome: string,
        public dataCadastro: Date = new Date(),
        public precoVenda: number,
        public precoCompra: number,
        public descricao: string,
        public idCategoria: number

    ){

        if (precoVenda && precoCompra < 0) throw new Error("Preço inválido");
        if(!nome || nome.trim() === "" ) throw new Error("O nome do produto não pode ser vazio");
        
    }
}   
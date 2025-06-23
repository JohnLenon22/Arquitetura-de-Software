export type CreateProdutoInputDto = {
    nome: string;
    quantidade: number;
    dataCadastro: Date;
    precoVenda: number;
    precoCompra: number;
    descricao: string;
    idCategoria: number
}

export type CreateProdutoOutputDto = {
    message: string
}
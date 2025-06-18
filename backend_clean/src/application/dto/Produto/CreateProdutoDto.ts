export type CreateProdutoInputDto = {
    nome: string;
    dataCadastro: Date;
    precoVenda: number;
    precoCompra: number;
    descricao: string;
    idCategoria: number
}

export type CreateProdutoOutputDto = {
    message: string
}
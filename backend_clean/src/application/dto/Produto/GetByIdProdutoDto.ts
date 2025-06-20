export type GetByIdProdutoInputDto = {
    id: string;
}

export type GetByIdProdutoOutputDto = {
    nome: string;
    dataCadastro: Date;
    precoVenda: number;
    precoCompra: number;
    descricao: string;
    idCategoria: number
}
export type GetByIdProdutoInputDto = {
    id: string;
}

export type GetByIdProdutoOutputDto = {
    nome: string;
    quantidade: number;
    dataCadastro: Date | string;
    precoVenda: number;
    precoCompra: number;
    descricao: string;
    idCategoria: number
}
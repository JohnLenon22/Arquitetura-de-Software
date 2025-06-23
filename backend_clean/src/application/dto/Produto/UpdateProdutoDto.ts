export type UpdateProdutoInputDto = {
    id: string;
    nome: string;
    quantidade: number;
    dataCadastro: Date;
    precoVenda: number;
    precoCompra: number;
    descricao: string;
    idCategoria: number;
}

export type UpdateProdutoOutputDto = {
    message: string;
}


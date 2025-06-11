export type CreateProdutoInputDto = void
export type CreateProdutoOutputDto = {
    id: string;
    nome: string;
    dataCadastro: Date;
    precoVenda: number;
    precoCompra: number;
    descricao: string;
    idCategoria: number
}[]
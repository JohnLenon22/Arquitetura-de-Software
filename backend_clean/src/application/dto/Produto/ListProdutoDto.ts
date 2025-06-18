export type ListProdutoInputDto = void
export type ListProdutoOutputDto = {
    id: string;
    nome: string;
    dataCadastro: Date;
    precoVenda: number;
    precoCompra: number;
    descricao: string;
    idCategoria: number
}[]
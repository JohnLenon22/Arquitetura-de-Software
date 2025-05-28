import { IProdutoRepository } from "../../../domain/repositories/IProdutoRepository";
import { Produto } from "../../../domain/entities/Produto";
export class UpdateProduto{
    constructor(private produtoRep: IProdutoRepository){}

    async execute(id:string, nome: string, status: string , dataCadastro: Date ,precoVenda: number ,precoCompra: number, descricao: string, quantidadeEstoque: number, idCategoria: string){
        const produto = new Produto(id, nome, status, dataCadastro, precoVenda, precoCompra, descricao, quantidadeEstoque, idCategoria)
        await this.produtoRep.update(id, produto)
    }
}
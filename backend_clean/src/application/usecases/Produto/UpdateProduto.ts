import { IProdutoRepository } from "../../../domain/repositories/IProdutoRepository";
import { Produto } from "../../../domain/entities/Produto";
export class UpdateProduto{
    constructor(private produtoRep: IProdutoRepository){}

    async execute(id:string, nome: string, dataCadastro: Date ,precoVenda: number ,precoCompra: number, descricao: string, idCategoria: number){
        const produto = new Produto(id, nome, dataCadastro, precoVenda, precoCompra, descricao, idCategoria)
        await this.produtoRep.update(id, produto)
    }
}
import { IProdutoRepository } from "../../domain/repositories/IProdutoRepository";
import { Produto } from "../../domain/entities/Produto";
export class UpdateProduto{
    constructor(private produtoRep: IProdutoRepository){}

    async execute(id:string, nome: string, preco: number, descricao: string, quantidadeEstoque: number, categoriaId: number){
        const produto = new Produto(id, nome, preco, descricao, quantidadeEstoque, categoriaId)
        await this.produtoRep.update(id, produto)
    }
}
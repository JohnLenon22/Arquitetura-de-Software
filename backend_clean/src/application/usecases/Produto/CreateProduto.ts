import { IProdutoRepository } from "../../../domain/repositories/IProdutoRepository";
import { Produto } from "../../../domain/entities/Produto";
import { randomUUID } from "crypto";

export class CreateProduto {
    constructor(private produtoRep: IProdutoRepository){}

    async execute(nome: string, status: string , dataCadastro: Date ,precoVenda: number ,precoCompra: number,descricao: string , quantidadeEstoque: number, idCategoria: string){
        const produto = new Produto(
            randomUUID(),
            nome,
            status,
            dataCadastro,
            precoVenda,
            precoCompra,
            descricao,
            quantidadeEstoque,
            idCategoria
        )
        await this.produtoRep.create(produto);
    }

}


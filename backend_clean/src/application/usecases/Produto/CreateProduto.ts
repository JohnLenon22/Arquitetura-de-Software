import { IProdutoRepository } from "../../../domain/repositories/IProdutoRepository";
import { Produto } from "../../../domain/entities/Produto";
import { randomUUID } from "crypto";

export class CreateProduto {
    constructor(private produtoRep: IProdutoRepository){}

    async execute(nome: string, preco: number , descricao:string ,quantidadeEstoque: number ,categoriaId: number ){
        const produto = new Produto(
            randomUUID(),
            nome,
            preco,
            descricao,
            quantidadeEstoque,
            categoriaId
        )
        await this.produtoRep.create(produto);
    }

}


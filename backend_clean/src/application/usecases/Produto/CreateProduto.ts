import { IProdutoRepository } from "../../../domain/repositories/IProdutoRepository";
import { Produto } from "../../../domain/entities/Produto";
import { randomUUID } from "crypto";

export class CreateProduto {
    constructor(private produtoRep: IProdutoRepository){}

    async execute(nome: string, dataCadastro: Date ,precoVenda: number ,precoCompra: number,descricao: string , idCategoria: number){
        const produto = new Produto(
            randomUUID(),
            nome,
            dataCadastro,
            precoVenda,
            precoCompra,
            descricao,
            idCategoria
        )
        await this.produtoRep.create(produto);
    }

}


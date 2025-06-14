import { IProdutoRepository } from "../../../domain/repositories/IProdutoRepository";

export class GetProduto{
    constructor(private produtoRep: IProdutoRepository){}

    async execute(){
        return await this.produtoRep.findAll()
    }
}
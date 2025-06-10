import { IProdutoRepository } from "../../../domain/repositories/IProdutoRepository";

export class GetByIdProduto{
    constructor(private produtoRep: IProdutoRepository){}

    async execute(id: string){
        return await this.produtoRep.findById(id)
    }
}
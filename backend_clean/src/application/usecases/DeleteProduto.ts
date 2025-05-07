import { IProdutoRepository } from "../../domain/repositories/IProdutoRepository";

export class DeleteProduto{
    constructor(private produtoRep: IProdutoRepository){}

    async execute(id: string){
        await this.produtoRep.delete(id)
    }

}
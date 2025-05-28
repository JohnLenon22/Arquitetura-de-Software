import {Produto} from '@prisma/client'
import { IProdutoRepository } from "../../../domain/repositories/IProdutoRepository";

export class GetByIdProduto{
    constructor(private produtoRep: IProdutoRepository){}

    async execute(id: string): Promise<Produto | null>{
        return await this.produtoRep.findById(id)
    }
}
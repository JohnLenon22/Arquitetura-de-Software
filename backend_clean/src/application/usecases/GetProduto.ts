import {Produto} from '@prisma/client'
import { IProdutoRepository } from "../../domain/repositories/IProdutoRepository";

export class GetProduto{
    constructor(private produtoRep: IProdutoRepository){}

    async execute(): Promise<Produto[]>{
        return await this.produtoRep.findAll()
    }
}
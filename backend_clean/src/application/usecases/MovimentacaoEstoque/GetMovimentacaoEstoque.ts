import { IMovimentacaoEstoqueRepository } from "../../../domain/repositories/IMovimentaoEstoqueRepository";

export class GetMovimentacaoEstoque{
    constructor(private movimentacaoEstoqueRep: IMovimentacaoEstoqueRepository){}

        async execute(){
            return await this.movimentacaoEstoqueRep.findAll();
        }
}
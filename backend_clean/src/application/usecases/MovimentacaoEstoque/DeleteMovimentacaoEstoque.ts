import { IMovimentacaoEstoqueRepository } from "../../../domain/repositories/IMovimentaoEstoqueRepository";


export class DeleteMovimentacaoEstoque{
    constructor(private movimentacaoEstoqueRep: IMovimentacaoEstoqueRepository){}
    
        async execute(id: string){
            await this.movimentacaoEstoqueRep.delete(id);
        }
}
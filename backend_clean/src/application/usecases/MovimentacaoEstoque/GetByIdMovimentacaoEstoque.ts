import { IMovimentacaoEstoqueRepository } from "../../../domain/repositories/IMovimentaoEstoqueRepository";


export class GetByIdMovimentacaoEstoque{
    constructor(private movimentacaoEstoqueRep: IMovimentacaoEstoqueRepository){}
    
        async execute(id: string){
            await this.movimentacaoEstoqueRep.findById(id);
        }
}
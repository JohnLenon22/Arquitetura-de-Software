import { IMovimentacaoEstoqueRepository } from "../../../domain/repositories/IMovimentaoEstoqueRepository";


export class GetByIdMovimentacaoEstoque{
    constructor(private movimentacaoEstoqueRep: IMovimentacaoEstoqueRepository){}
    
        async execute(id: string){
            return  await this.movimentacaoEstoqueRep.findById(id);
        }
}
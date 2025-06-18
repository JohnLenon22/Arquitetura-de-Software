import { IMovimentacaoEstoqueRepository } from "../../../domain/repositories/IMovimentaoEstoqueRepository";
import { DeleteMovimentacaoEstoqueInputDto, DeleteMovimentacaoEstoqueOutputDto } from "../../dto/MovimentaçãoEstoque/DeleteMovimentacaoEstoqueDto";
import { UseCase } from "../UseCase";


export class DeleteMovimentacaoEstoque implements UseCase<DeleteMovimentacaoEstoqueInputDto, DeleteMovimentacaoEstoqueOutputDto>{
    constructor(private movimentacaoEstoqueRep: IMovimentacaoEstoqueRepository){}
    
    async execute(InputDTO: DeleteMovimentacaoEstoqueInputDto): Promise<DeleteMovimentacaoEstoqueOutputDto>{
        await this.movimentacaoEstoqueRep.delete(InputDTO.id);
        const OutputDTO: DeleteMovimentacaoEstoqueOutputDto = {message:`Movimentação deletada com sucesso`}
        return OutputDTO;
    }
}
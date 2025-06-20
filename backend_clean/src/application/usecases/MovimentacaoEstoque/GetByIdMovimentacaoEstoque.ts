import { IMovimentacaoEstoqueRepository } from "../../../domain/repositories/IMovimentaoEstoqueRepository";
import { GetByIdMovimentacaoEstoqueInputDto, GetByIdMovimentacaoEstoqueOutputDto } from "../../dto/MovimentaçãoEstoque/GetByIdMovimentacaoEstoqueDto";
import { UseCase } from "../UseCase";
export class GetByIdMovimentacaoEstoque implements UseCase<GetByIdMovimentacaoEstoqueInputDto, GetByIdMovimentacaoEstoqueOutputDto>{
    constructor(private movimentacaoEstoqueRep: IMovimentacaoEstoqueRepository){}

    async execute(InputDTO: GetByIdMovimentacaoEstoqueInputDto): Promise<GetByIdMovimentacaoEstoqueOutputDto>{
        const movimentacao = await this.movimentacaoEstoqueRep.findById(InputDTO.id);
        if (movimentacao) {
            const OutputDTO:GetByIdMovimentacaoEstoqueOutputDto = [{
                idProduto: movimentacao.idProduto,
                idUsuario: movimentacao.idUsuario,
                idLocalArmazenamento: movimentacao.idLocalArmazenamento,
                tipoMovimentacao: movimentacao.tipoMovimentacao,
                quantidade: movimentacao.quantidade,
                data: movimentacao.data
            }];
            return OutputDTO;
        }else{
            throw new Error("Movimentação não encontrada");
        }
    }
}
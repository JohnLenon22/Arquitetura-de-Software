import { IMovimentacaoEstoqueRepository } from "../../../domain/repositories/IMovimentaoEstoqueRepository";
import { GetByIdMovimentacaoEstoqueInputDto, GetByIdMovimentacaoEstoqueOutputDto } from "../../dto/MovimentaçãoEstoque/GetByIdMovimentacaoEstoqueDto";
import { UseCase } from "../UseCase";
export class GetMovimentacaoEstoque implements UseCase<GetByIdMovimentacaoEstoqueInputDto, GetByIdMovimentacaoEstoqueOutputDto>{
    constructor(private movimentacaoEstoqueRep: IMovimentacaoEstoqueRepository){}

    async execute():Promise<GetByIdMovimentacaoEstoqueOutputDto>{
        const movimentacoes = await this.movimentacaoEstoqueRep.findAll();

        const OutputDTO: GetByIdMovimentacaoEstoqueOutputDto = movimentacoes.map(m=>({
            id: m.id,
            idProduto: m.idProduto,
            idUsuario: m.idUsuario,
            idLocalArmazenamento: m.idLocalArmazenamento,
            tipoMovimentacao: m.tipoMovimentacao,
            quantidade: m.quantidade,
            data: m.data
        }))

        return OutputDTO;
    }

}
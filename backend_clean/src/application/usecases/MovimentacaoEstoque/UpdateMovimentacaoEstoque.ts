import { IMovimentacaoEstoqueRepository } from "../../../domain/repositories/IMovimentaoEstoqueRepository";
import { UpdateMovimentacoesEstoqueInputDto } from "../../dto/MovimentaçãoEstoque/UpdateMovimentacoesEstoqueDto";
import { UpdateMovimentacoesEstoqueOutputDto } from "../../dto/MovimentaçãoEstoque/UpdateMovimentacoesEstoqueDto";
import { MovimentacaoEstoque } from "../../../domain/entities/MovimentacaoEstoque";
import { TipoMovimentacao } from "@prisma/client";
import { UseCase } from "../UseCase";
export class UpdateMovimentacaoEstoque implements UseCase<UpdateMovimentacoesEstoqueInputDto, UpdateMovimentacoesEstoqueOutputDto>{
    constructor(private movimentacaoEstoqueRep: IMovimentacaoEstoqueRepository){}
    
    async execute(InputDTO: UpdateMovimentacoesEstoqueInputDto): Promise<UpdateMovimentacoesEstoqueOutputDto>{
        const movimentacaoEstoque = new MovimentacaoEstoque( 
            InputDTO.id, 
            InputDTO.idProduto, 
            InputDTO.idUsuario, 
            InputDTO.idUsuarioMovimentacao,
            InputDTO.idLocalArmazenamento, 
            InputDTO.tipoMovimentacao, 
            InputDTO.quantidade, 
            InputDTO.data
        );
        await this.movimentacaoEstoqueRep.update(InputDTO.id, movimentacaoEstoque);

        const OutputDTO: UpdateMovimentacoesEstoqueOutputDto = {message: `Movimentação atualizada com sucesso\nID:${InputDTO.id}`};
        return OutputDTO;
    }
}
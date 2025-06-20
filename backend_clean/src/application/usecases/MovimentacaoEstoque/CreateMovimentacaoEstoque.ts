import { IMovimentacaoEstoqueRepository } from "../../../domain/repositories/IMovimentaoEstoqueRepository";
import { MovimentacaoEstoque } from "../../../domain/entities/MovimentacaoEstoque";
import { randomUUID } from "crypto";
import { TipoMovimentacao } from "@prisma/client";
import { CreateMovimentacaoEstoqueInputDto } from "../../dto/MovimentaçãoEstoque/CreateMovimentacaoEstoqueInputDto";
import { CreateMovimentacaoEstoqueOutputDto } from "../../dto/MovimentaçãoEstoque/CreateMovimentacaoEstoqueInputDto";

import { UseCase } from "../UseCase";

export class CreateMovimentacaoEstoque implements UseCase<CreateMovimentacaoEstoqueInputDto, CreateMovimentacaoEstoqueOutputDto>{
    constructor(private movimentacaoEstoqueRep: IMovimentacaoEstoqueRepository){}
    
    async execute(InputDTO: CreateMovimentacaoEstoqueInputDto): Promise<CreateMovimentacaoEstoqueOutputDto>{
        const movimentacaoEstoque = new MovimentacaoEstoque(
            randomUUID(),
            InputDTO.idProduto, 
            InputDTO.idUsuario,
            InputDTO.idLocalArmazenamento,
            InputDTO.tipoMovimentacao,
            InputDTO.quantidade,
            InputDTO.data
        )
        await this.movimentacaoEstoqueRep.create(movimentacaoEstoque);

        const OutputDTO: CreateMovimentacaoEstoqueOutputDto = {message : `Movimentação bem sucedida\n ID: ${movimentacaoEstoque.id}`};
        return OutputDTO;
    }
}

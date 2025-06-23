import { IProdutoRepository } from "../../../domain/repositories/IProdutoRepository";
import { Produto } from "../../../domain/entities/Produto";
import { UpdateQuantidadeProdutoInputDto,UpdateQuantidadeProdutoOutputDto  } from "../../dto/Produto/UpdateQuantidadeDto";
import { UseCase } from "../UseCase";

export class UpdateQuantidadeProduto implements UseCase<UpdateQuantidadeProdutoInputDto, UpdateQuantidadeProdutoOutputDto>{
    constructor(private produtoRep: IProdutoRepository){}

     async execute(InputDTO: UpdateQuantidadeProdutoInputDto): Promise<UpdateQuantidadeProdutoOutputDto>{
        const produto = await this.produtoRep.findById(InputDTO.id);

        await this.produtoRep.updateQuantidade(InputDTO.id, InputDTO.quantidade);
        const outputDTO: UpdateQuantidadeProdutoOutputDto = {message: `Quantidade atualizada com sucesso`}
        return outputDTO;
    }
}
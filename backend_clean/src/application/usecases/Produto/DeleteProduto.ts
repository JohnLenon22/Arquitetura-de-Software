import { IProdutoRepository } from "../../../domain/repositories/IProdutoRepository";
import { DeleteProdutoInputDto, DeleteProdutoOutputDto } from "../../dto/Produto/DeleteProdutoDto";
import { UseCase } from "../UseCase";
export class DeleteProduto implements UseCase<DeleteProdutoInputDto, DeleteProdutoOutputDto >{
    constructor(private produtoRep: IProdutoRepository){}

    async execute(InputDTO: DeleteProdutoInputDto): Promise<DeleteProdutoOutputDto>{
        await this.produtoRep.delete(InputDTO.id)
        const OutputDTO: DeleteProdutoOutputDto = {message: `Produto deletado com sucesso`}
        return OutputDTO;
    }

}
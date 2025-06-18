import { IProdutoRepository } from "../../../domain/repositories/IProdutoRepository";
import { Produto } from "../../../domain/entities/Produto";
import { UpdateProdutoInputDto,UpdateProdutoOutputDto } from "../../dto/Produto/UpdateProdutoDto";
import { UseCase } from "../UseCase";

export class UpdateProduto implements UseCase<UpdateProdutoInputDto,UpdateProdutoOutputDto>{
    constructor(private produtoRep: IProdutoRepository){}

    async execute(InputDTO: UpdateProdutoInputDto): Promise<UpdateProdutoOutputDto>{
        const produto = new Produto(InputDTO.id,InputDTO.nome,InputDTO.dataCadastro,InputDTO.precoVenda,InputDTO.precoCompra,InputDTO.descricao, InputDTO.idCategoria)
        await this.produtoRep.update(InputDTO.id, produto)
        const OutputDTO: UpdateProdutoOutputDto = {message: `Produto atualizado com sucesso\nID: ${produto.id}`}
        return OutputDTO;
    }
}
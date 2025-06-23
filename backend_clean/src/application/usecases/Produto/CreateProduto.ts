import { IProdutoRepository } from "../../../domain/repositories/IProdutoRepository";
import { Produto } from "../../../domain/entities/Produto";
import { randomUUID } from "crypto";
import { CreateProdutoInputDto, CreateProdutoOutputDto } from "../../dto/Produto/CreateProdutoDto";
import { UseCase } from "../UseCase";
export class CreateProduto implements UseCase<CreateProdutoInputDto, CreateProdutoOutputDto>{
    constructor(private produtoRep: IProdutoRepository){}

    async execute(InputDTO: CreateProdutoInputDto): Promise<CreateProdutoOutputDto>{
        const produto = new Produto(
            randomUUID(),
            InputDTO.nome,
            InputDTO.quantidade,
            InputDTO.dataCadastro,
            InputDTO.precoVenda,
            InputDTO.precoCompra,
            InputDTO.descricao,
            InputDTO.idCategoria
        )
        await this.produtoRep.create(produto);
        const OutputDTO: CreateProdutoOutputDto = {message: `Produto criado com sucesso\n ID: ${produto.id}`}
        return OutputDTO;
    }

}


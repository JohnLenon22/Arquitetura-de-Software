import { IProdutoRepository } from "../../../domain/repositories/IProdutoRepository";
import { ListProdutoInputDto, ListProdutoOutputDto } from "../../dto/Produto/ListProdutoDto";
import { UseCase } from "../UseCase";

export class GetProduto implements UseCase<ListProdutoInputDto, ListProdutoOutputDto> {
    constructor(private produtoRep: IProdutoRepository){}

    async execute(): Promise<ListProdutoOutputDto>{
        const produtos = await this.produtoRep.findAll()
        const OutputDTO: ListProdutoOutputDto = produtos.map( produto =>({
            id: produto.id,
            nome: produto.nome,
            quantidade: produto.quantidade,
            dataCadastro: produto.dataCadastro,
            precoVenda: produto.precoVenda,
            precoCompra: produto.precoCompra,
            descricao: produto.descricao,
            idCategoria: produto.idCategoria
        }))
        return OutputDTO;
    }
}
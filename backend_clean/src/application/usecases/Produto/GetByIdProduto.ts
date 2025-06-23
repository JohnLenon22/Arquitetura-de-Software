import { IProdutoRepository } from "../../../domain/repositories/IProdutoRepository";
import { GetByIdProdutoInputDto, GetByIdProdutoOutputDto } from "../../dto/Produto/GetByIdProdutoDto";
import { UseCase } from "../UseCase";
export class GetByIdProduto implements UseCase<GetByIdProdutoInputDto, GetByIdProdutoOutputDto>{
    constructor(private produtoRep: IProdutoRepository){}

    async execute(InputDTO: GetByIdProdutoInputDto): Promise<GetByIdProdutoOutputDto>{
        const produto = await this.produtoRep.findById(InputDTO.id)
        if(produto){
            const OutputDTO: GetByIdProdutoOutputDto = {
                nome: produto.nome,
                quantidade: produto.quantidade,
                dataCadastro: produto.dataCadastro,
                precoVenda: produto.precoVenda,
                precoCompra: produto.precoCompra,
                descricao: produto.descricao,
                idCategoria: produto.idCategoria
            }
            return OutputDTO;
        }else{
            throw new Error("Produto não encontrado");
        }
    }
}
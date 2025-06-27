import { TipoMovimentacao } from "@prisma/client";
import { UseCase } from "../UseCase";
import { CreateMovimentacaoEstoqueInputDto, CreateMovimentacaoEstoqueOutputDto } from "../../dto/MovimentaçãoEstoque/CreateMovimentacaoEstoqueInputDto";
import { IMovimentacaoEstoqueRepository } from "../../../domain/repositories/IMovimentaoEstoqueRepository";
import { IProdutoRepository } from "../../../domain/repositories/IProdutoRepository";

export class CreateMovimentacaoEstoque implements UseCase<CreateMovimentacaoEstoqueInputDto, CreateMovimentacaoEstoqueOutputDto>{
    constructor(
        private movimentacaoEstoqueRep: IMovimentacaoEstoqueRepository,
        private produtoRep: IProdutoRepository
    ){}
    
    async execute(InputDTO: CreateMovimentacaoEstoqueInputDto): Promise<CreateMovimentacaoEstoqueOutputDto>{
       const produto = await this.produtoRep.findById(InputDTO.idProduto);

        if (!produto) {
            throw new Error('Produto não encontrado');
        }

        let novaQuantidade = produto.quantidade;

        if (InputDTO.tipoMovimentacao === 'ENTRADA' || InputDTO.tipoMovimentacao === 'TRANSFERENCIA') {
            novaQuantidade += InputDTO.quantidade;
        } else if (InputDTO.tipoMovimentacao === 'SAIDA') {
            if (produto.quantidade < InputDTO.quantidade) {
                throw new Error('Estoque insuficiente');
            }
            novaQuantidade -= InputDTO.quantidade;
        }

        try{
            await this.produtoRep.updateQuantidade(InputDTO.idProduto, novaQuantidade);

            await this.movimentacaoEstoqueRep.create({
                id: crypto.randomUUID(),
                tipoMovimentacao: InputDTO.tipoMovimentacao,
                quantidade: InputDTO.quantidade,
                idProduto: InputDTO.idProduto,
                idUsuario: InputDTO.idUsuario,
                idPessoa: InputDTO.idPessoa,
                idLocalArmazenamento: InputDTO.idLocalArmazenamento,
                data: InputDTO.data ?? new Date()
            });
        }catch(error){
            throw new Error('Erro ao criar movimentação de estoque');
        }
        

        const OutputDTO: CreateMovimentacaoEstoqueOutputDto = {message : `Movimentação bem sucedida`};
        return OutputDTO;
    }
}

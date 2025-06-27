import { TipoMovimentacao } from "@prisma/client";
import { UseCase } from "../UseCase";
import { CreateMovimentacaoEstoqueInputDto, CreateMovimentacaoEstoqueOutputDto } from "../../dto/MovimentaçãoEstoque/CreateMovimentacaoEstoqueInputDto";
import { IMovimentacaoEstoqueRepository } from "../../../domain/repositories/IMovimentaoEstoqueRepository";
import { IProdutoRepository } from "../../../domain/repositories/IProdutoRepository";
import { PrismaClient } from "@prisma/client";
import { MovimentacaoEstoque } from "../../../domain/entities/MovimentacaoEstoque";
export class CreateMovimentacaoEstoque implements UseCase<CreateMovimentacaoEstoqueInputDto, CreateMovimentacaoEstoqueOutputDto>{
    private prisma = new PrismaClient();

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

        if (InputDTO.tipoMovimentacao === 'ENTRADA') {
            novaQuantidade += InputDTO.quantidade;
        } else if (InputDTO.tipoMovimentacao === 'SAIDA') {
            if (produto.quantidade < InputDTO.quantidade) {
                throw new Error('Estoque insuficiente');
            }
            novaQuantidade -= InputDTO.quantidade;
        }

        const movimentacao = new MovimentacaoEstoque(
            crypto.randomUUID(),
            InputDTO.data ?? new Date(),
            InputDTO.idProduto,
            InputDTO.idUsuario,
            InputDTO.tipoMovimentacao,
            InputDTO.quantidade,
            InputDTO.idLocalArmazenamento,
            InputDTO.idLocalArmazenamentoDestino,
            InputDTO.idPessoa,
        );

        try {
            await this.prisma.$transaction(async (prisma) => {
                await this.produtoRep.updateQuantidade(InputDTO.idProduto, novaQuantidade);
                await this.movimentacaoEstoqueRep.create(movimentacao);
            });
        }catch (error) {
            console.error('Erro ao registrar movimentação:', error);
            throw new Error("Erro ao registrar movimentação");
        }


        
        const OutputDTO: CreateMovimentacaoEstoqueOutputDto = {message : `Movimentação bem sucedida`};
        return OutputDTO;
    }
}

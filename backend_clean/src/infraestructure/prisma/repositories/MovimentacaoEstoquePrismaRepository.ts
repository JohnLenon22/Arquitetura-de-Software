import { TipoMovimentacao } from "@prisma/client";
import { MovimentacaoEstoque } from "../../../domain/entities/MovimentacaoEstoque";
import { IMovimentacaoEstoqueRepository } from "../../../domain/repositories/IMovimentaoEstoqueRepository";
import {prisma} from "../client";

export class MovimentacaoEstoquePrismaRepository implements IMovimentacaoEstoqueRepository {
    async create(movimentacaoEstoque: MovimentacaoEstoque): Promise<void>{
        if( movimentacaoEstoque.tipoMovimentacao === TipoMovimentacao.TRANSFERENCIA){
            const saida = {
                id: crypto.randomUUID(),
                idProduto: movimentacaoEstoque.idProduto,
                idUsuario: movimentacaoEstoque.idUsuario,
                idLocalArmazenamento: movimentacaoEstoque.idLocalArmazenamento,
                tipoMovimentacao: TipoMovimentacao.SAIDA,
                quantidade: movimentacaoEstoque.quantidade,
                data: movimentacaoEstoque.data,
                idPessoa: movimentacaoEstoque.idPessoa??null
            };

            if (!movimentacaoEstoque.idLocalArmazenamentoDestino ) {
                throw new Error("idLocalArmazenamentoDestino não definido.");
            }
            const entrada = {
                id: crypto.randomUUID(),
                idProduto: movimentacaoEstoque.idProduto,
                idUsuario: movimentacaoEstoque.idUsuario,
                idLocalArmazenamento: movimentacaoEstoque.idLocalArmazenamentoDestino,
                tipoMovimentacao: TipoMovimentacao.ENTRADA,
                quantidade: movimentacaoEstoque.quantidade,
                data: movimentacaoEstoque.data,
                idLocalArmazenamentoDestino: movimentacaoEstoque.idLocalArmazenamentoDestino,
                idPessoa: movimentacaoEstoque.idPessoa??null
            };
            const transferencia = {
                id: crypto.randomUUID(),
                idProduto: movimentacaoEstoque.idProduto,
                idUsuario: movimentacaoEstoque.idUsuario,
                idLocalArmazenamento: movimentacaoEstoque.idLocalArmazenamentoDestino,
                tipoMovimentacao: TipoMovimentacao.TRANSFERENCIA,
                quantidade: movimentacaoEstoque.quantidade,
                data: movimentacaoEstoque.data,
                idLocalArmazenamentoDestino: movimentacaoEstoque.idLocalArmazenamentoDestino,
                idPessoa: movimentacaoEstoque.idPessoa??null
            }

            await prisma.$transaction([
                prisma.movimentacaoEstoque.create({ data: saida }),
                prisma.movimentacaoEstoque.create({ data: entrada }),
                prisma.movimentacaoEstoque.create({ data: transferencia })
            ]);    
        }else{
           await prisma.movimentacaoEstoque.create({
            data:{
                id: crypto.randomUUID(),
                data: movimentacaoEstoque.data,
                idProduto: movimentacaoEstoque.idProduto,
                idUsuario: movimentacaoEstoque.idUsuario,
                idLocalArmazenamento: movimentacaoEstoque.idLocalArmazenamento,
                tipoMovimentacao: TipoMovimentacao.ENTRADA,
                quantidade: movimentacaoEstoque.quantidade,
                idLocalArmazenamentoDestino: movimentacaoEstoque.idLocalArmazenamentoDestino??null,
                idPessoa: movimentacaoEstoque.idPessoa??null
            }
        })}
    }   
    async findById(id: string): Promise<MovimentacaoEstoque | null>{
        const movimentacaoEstoque = await prisma.movimentacaoEstoque.findUnique({where:{id}});
        return movimentacaoEstoque ? new MovimentacaoEstoque(
            movimentacaoEstoque.id,
            movimentacaoEstoque.data,
            movimentacaoEstoque.idProduto,
            movimentacaoEstoque.idUsuario,
            movimentacaoEstoque.tipoMovimentacao,
            movimentacaoEstoque.quantidade,
            movimentacaoEstoque.idLocalArmazenamento,
            movimentacaoEstoque.idLocalArmazenamentoDestino ?? '',
            movimentacaoEstoque.idPessoa ?? ''
        ) : null;
    }
    async findAll(): Promise<MovimentacaoEstoque[]>{
        const movimentacoesEstoque = await prisma.movimentacaoEstoque.findMany();
        return movimentacoesEstoque.map((m: { id: string; idProduto: string; idUsuario: string; idPessoa: string| null; idLocalArmazenamento: string; tipoMovimentacao: TipoMovimentacao; quantidade: number; idLocalArmazenamentoDestino: string | null; data: Date }) => {
            return new MovimentacaoEstoque(
                m.id,
                m.data,
                m.idProduto,
                m.idUsuario,
                m.tipoMovimentacao,
                m.quantidade,
                m.idLocalArmazenamento,
                m.idLocalArmazenamentoDestino??'',
                m.idPessoa??'',
            );
        });
        
    }
    async update(id: string, movimentacaoEstoque: MovimentacaoEstoque): Promise<void>{
        await prisma.movimentacaoEstoque.update({
            where:{id},
            data:{
                idProduto: movimentacaoEstoque.idProduto,
                idUsuario: movimentacaoEstoque.idUsuario,
                idLocalArmazenamento: movimentacaoEstoque.idLocalArmazenamento,
                tipoMovimentacao: movimentacaoEstoque.tipoMovimentacao,
                quantidade: movimentacaoEstoque.quantidade,
                data: movimentacaoEstoque.data,
                idLocalArmazenamentoDestino: movimentacaoEstoque.idLocalArmazenamentoDestino || '',
                idPessoa: movimentacaoEstoque.idPessoa || ''
            }
        })
    }
    async delete(id: string): Promise<void>{
        await prisma.movimentacaoEstoque.delete({where:{id}})
    }
}

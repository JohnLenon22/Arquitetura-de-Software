import { MovimentacaoEstoque } from "../../../domain/entities/MovimentacaoEstoque";
import { IMovimentacaoEstoqueRepository } from "../../../domain/repositories/IMovimentaoEstoqueRepository";
import { prisma } from "../client";

export class MovimentacaoEstoquePrismaRepository implements IMovimentacaoEstoqueRepository {
    async create(movimentacao: MovimentacaoEstoque): Promise<void> {
        await prisma.MovimentacaoEstoque.create({
            data: {
                id: movimentacao.id,
                idProduto: movimentacao.idProduto,
                idUsuario: movimentacao.idUsuario,
                idLocalArmazenamento: movimentacao.idLocalArmazenamento,
                idUsuarioMovimentacao: movimentacao.idUsuarioMovimentacao,
                tipo: movimentacao.tipo,
                quantidade: movimentacao.quantidade,
                data: movimentacao.data,
            }
        });
    }

    async findAll(): Promise<MovimentacaoEstoque[]> {
        const movimentacoes = await prisma.MovimentacaoEstoque.findMany();
        return movimentacoes.map((m: { id: string; idProduto: string; idUsuario: string; idLocalArmazenamento: string; idUsuarioMovimentacao: string; tipo: string; quantidade: number; data: Date}) => new MovimentacaoEstoque(
            m.id,
            m.idProduto,
            m.idUsuario,
            m.idLocalArmazenamento,
            m.idUsuarioMovimentacao,
            m.tipo,
            m.quantidade,
            m.data
        ));
    }

    async findById(id: string): Promise<MovimentacaoEstoque | null> {
        const movimentacao = await prisma.MovimentacaoEstoque.findUnique({ where: { id } });
        return movimentacao ? new MovimentacaoEstoque(
            movimentacao.id,
            movimentacao.idProduto,
            movimentacao.idUsuario,
            movimentacao.idLocalArmazenamento,
            movimentacao.idUsuarioMovimentacao,
            movimentacao.tipo,
            movimentacao.quantidade,
            movimentacao.data
        ) : null;
    }

    async update(id: string, movimentacao: MovimentacaoEstoque): Promise<void> {
        await prisma.MovimentacaoEstoque.update({
            where: { id },
            data: {
                idProduto: movimentacao.idProduto,
                idUsuario: movimentacao.idUsuario,
                idLocalArmazenamento: movimentacao.idLocalArmazenamento,
                idUsuarioMovimentacao: movimentacao.idUsuarioMovimentacao,
                tipo: movimentacao.tipo,
                quantidade: movimentacao.quantidade,
                data: movimentacao.data,
            }
        });
    }

    async delete(id: string): Promise<void> {
        await prisma.MovimentacaoEstoque.delete({ where: { id } });
    }   

}
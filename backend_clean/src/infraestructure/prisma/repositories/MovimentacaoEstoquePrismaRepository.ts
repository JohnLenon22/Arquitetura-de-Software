import { TipoMovimentacao } from "@prisma/client";
import { MovimentacaoEstoque } from "../../../domain/entities/MovimentacaoEstoque";
import { IMovimentacaoEstoqueRepository } from "../../../domain/repositories/IMovimentaoEstoqueRepository";
import {prisma} from "../client";

export class MovimentacaoEstoquePrismaRepository implements IMovimentacaoEstoqueRepository {
    async create(movimentacaoEstoque: MovimentacaoEstoque): Promise<void>{
        await prisma.movimentacaoEstoque.create({
            data:{
                id: crypto.randomUUID(),
                idProduto: movimentacaoEstoque.idProduto,
                idUsuario: movimentacaoEstoque.idUsuario,
                idPessoa: movimentacaoEstoque.idPessoa,
                idLocalArmazenamento: movimentacaoEstoque.idLocalArmazenamento,
                tipoMovimentacao: movimentacaoEstoque.tipoMovimentacao,
                quantidade: movimentacaoEstoque.quantidade,
                data: movimentacaoEstoque.data
            }
        })
    }
    async findById(id: string): Promise<MovimentacaoEstoque | null>{
        const movimentacaoEstoque = await prisma.movimentacaoEstoque.findUnique({where:{id}});
        return movimentacaoEstoque ? new MovimentacaoEstoque(
            movimentacaoEstoque.id,
            movimentacaoEstoque.idProduto,
            movimentacaoEstoque.idUsuario,
            movimentacaoEstoque.idPessoa,
            movimentacaoEstoque.idLocalArmazenamento,
            movimentacaoEstoque.tipoMovimentacao,
            movimentacaoEstoque.quantidade,
            movimentacaoEstoque.data       
        ):null;
    }
    async findAll(): Promise<MovimentacaoEstoque[]>{
        const movimentacoesEstoque = await prisma.movimentacaoEstoque.findMany();
        return movimentacoesEstoque.map((m: { id: string; idProduto: string; idUsuario: string, idPessoa: string, idLocalArmazenamento: string, tipoMovimentacao: TipoMovimentacao, quantidade: number, data: Date}) => new MovimentacaoEstoque(
            m.id, 
            m.idProduto, 
            m.idUsuario, 
            m.idPessoa,
            m.idLocalArmazenamento, 
            m.tipoMovimentacao, 
            m.quantidade, 
            m.data
        ));
    }
    async update(id: string, movimentacaoEstoque: MovimentacaoEstoque): Promise<void>{
        await prisma.movimentacaoEstoque.update({
            where:{id},
            data:{
                idProduto: movimentacaoEstoque.idProduto,
                idUsuario: movimentacaoEstoque.idUsuario,
                idPessoa: movimentacaoEstoque.idPessoa,
                idLocalArmazenamento: movimentacaoEstoque.idLocalArmazenamento,
                tipoMovimentacao: movimentacaoEstoque.tipoMovimentacao,
                quantidade: movimentacaoEstoque.quantidade,
                data: movimentacaoEstoque.data
            }
        })
    }
    async delete(id: string): Promise<void>{
        await prisma.movimentacaoEstoque.delete({where:{id}})
    }
}

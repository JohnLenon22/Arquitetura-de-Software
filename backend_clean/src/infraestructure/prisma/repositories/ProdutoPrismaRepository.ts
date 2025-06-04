import { Produto } from '../../../domain/entities/Produto';
import {IProdutoRepository} from '../../../domain/repositories/IProdutoRepository';
import {prisma} from "../client";

export class ProdutoPrismaRepository implements IProdutoRepository {
    async create(produto: Produto): Promise<void>{
        await prisma.produto.create({
            data: {
                id: produto.id,
                nome: produto.nome,
                dataCadastro: produto.dataCadastro,
                precoVenda: produto.precoVenda,
                precoCompra: produto.precoCompra,
                descricao: produto.descricao,
                quantidadeEstoque: produto.quantidadeEstoque,
                idCategoria: produto.idCategoria
            }
        });
    }

    async findAll(): Promise<Produto[]>{
        const produtos = await prisma.produto.findMany();
        return produtos.map((p: { id: string; nome: string; dataCadastro: Date; precoVenda: number; precoCompra: number; descricao: string | null; quantidadeEstoque: number; idCategoria: string }) => new Produto(
            p.id, p.nome, p.dataCadastro, p.precoVenda, p.precoCompra, p.descricao || ``, p.quantidadeEstoque, p.idCategoria
        ));

    }

    async findById(id: string): Promise<Produto | null>{
        const produto = await prisma.produto.findUnique({where:{id}});
        return produto ? new Produto(
            produto.id, produto.nome, produto.dataCadastro, produto.precoVenda, produto.precoCompra, produto.descricao || ``, produto.quantidadeEstoque, produto.idCategoria
        ):null;
    }

    async update(id:string, produto: Produto): Promise<void>{
        await prisma.produto.update({
            where: {id},
            data: {
                nome: produto.nome,
                dataCadastro: produto.dataCadastro,
                precoVenda: produto.precoVenda,
                precoCompra: produto.precoCompra,
                descricao: produto.descricao,
                quantidadeEstoque: produto.quantidadeEstoque,
                idCategoria: produto.idCategoria
            }
        });
    }

    async delete(id:string): Promise<void>{
        await prisma.produto.delete({where:{id}})
    }
}



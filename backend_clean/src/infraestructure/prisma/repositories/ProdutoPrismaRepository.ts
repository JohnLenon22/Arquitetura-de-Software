import { Produto } from '../../../domain/entities/Produto';
import {IProdutoRepository} from '../../../domain/repositories/IProdutoRepository';
import {prisma} from "../client";

export class ProdutoPrismaRepository implements IProdutoRepository {
    async create(produto: Produto): Promise<void>{
        await prisma.produto.create({
            data: {
                nome: produto.nome,
                preco: produto.preco,
                descricao: produto.descricao,
                quantidadeEstoque: produto.quantidadeEstoque,
                categoriaId: produto.categoriaId
            }
        });
    }

    async findAll(): Promise<Produto[]>{
        const produtos = await prisma.produto.findMany();
        return produtos.map((p: { id: string; nome: string; preco: number; descricao: string | null; quantidadeEstoque: number; categoriaId: number }) => new Produto(
            p.id,p.nome, p.preco, p.descricao || ``, p.quantidadeEstoque, p.categoriaId
        ));

    }

    async findById(id: string): Promise<Produto | null>{
        const produto = await prisma.produto.findUnique({where:{id},});
        return produto ? new Produto(
            produto.id,produto.nome, produto.preco, produto.descricao|| ``, produto.quantidadeEstoque, produto.categoriaId
        ):null;
    }

    async update(id:string, produto: Produto): Promise<void>{
        await prisma.produto.update({
            where: {id},
            data: {
                nome: produto.nome,
                preco: produto.preco,
                descricao: produto.descricao,
                quantidadeEstoque: produto.quantidadeEstoque,
                categoriaId: produto.categoriaId
            }
        });
    }

    async delete(id:string): Promise<void>{
        await prisma.produto.delete({where:{id}})
    }
}



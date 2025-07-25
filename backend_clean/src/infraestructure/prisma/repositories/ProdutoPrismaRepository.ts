import { Produto } from '../../../domain/entities/Produto';
import {IProdutoRepository} from '../../../domain/repositories/IProdutoRepository';
import {prisma} from "../client";

export class ProdutoPrismaRepository implements IProdutoRepository {
    async create(produto: Produto): Promise<void>{
        await prisma.produto.create({
            data: {
                id: produto.id,
                nome: produto.nome,
                quantidade: produto.quantidade,
                dataCadastro: produto.dataCadastro,
                precoVenda: produto.precoVenda,
                precoCompra: produto.precoCompra,
                descricao: produto.descricao,
                idCategoria: produto.idCategoria
            },
        });
    }

    async findAll(): Promise<Produto[]>{
        const produtos = await prisma.produto.findMany();
        return produtos.map((p: { id: string; nome: string; quantidade: number; dataCadastro: Date; precoVenda: number; precoCompra: number; descricao: string | null; idCategoria: number }) => new Produto(
            p.id, 
            p.nome, 
            p.quantidade,
            p.dataCadastro, 
            p.precoVenda, 
            p.precoCompra, 
            p.descricao || ``, 
            p.idCategoria
        ));

    }

    async findById(id: string): Promise<Produto | null>{
        const produto = await prisma.produto.findUnique({where:{id}});
        return produto ? new Produto(
            produto.id, 
            produto.nome, 
            produto.quantidade,
            produto.dataCadastro, 
            produto.precoVenda, 
            produto.precoCompra, 
            produto.descricao || ``, 
            produto.idCategoria
        ):null;
    }

    async update(id:string, produto: Produto): Promise<void>{
        await prisma.produto.update({
            where: {id},
            data: {
                nome: produto.nome,
                quantidade: produto.quantidade,
                dataCadastro: produto.dataCadastro,
                precoVenda: produto.precoVenda,
                precoCompra: produto.precoCompra,
                descricao: produto.descricao,
                idCategoria: produto.idCategoria
            }
        });
    }

    async updateQuantidade(id: string, novaQuantidade: number): Promise<void> {
        await prisma.produto.update({
            where: { id },
            data: {quantidade: novaQuantidade}
        });
    }

    async delete(id:string): Promise<void>{
        await prisma.produto.delete({where:{id}})
    }
}



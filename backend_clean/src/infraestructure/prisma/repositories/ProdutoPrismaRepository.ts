import { Produto } from '../../../domain/entities/Produto';
import {IProdutoRepository} from '../../../domain/repositories/IProdutoRepository';
import {prisma} from "../client";

export class ProdutoPrismaRepository implements IProdutoRepository {
    async create(produto: Produto): Promise<void>{
        await prisma.produto.create({
            data: {
                nome: produto.nome,
                status: produto.status,
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
        return produtos.map((p: { id: string; nome: string;status: string; dataCadastro: Date; precoVenda: number, precoCompra: number, descricao: string, quantidadeEstoque: number, idCategoria: string}) => new Produto(
            p.id, 
            p.nome, 
            p.status, 
            p.dataCadastro, 
            p.precoVenda, 
            p.precoCompra,  
            p.descricao || ``, 
            p.quantidadeEstoque, 
            p.idCategoria
        ));

    }

    async findById(id: string): Promise<Produto | null>{
        const produto = await prisma.produto.findUnique({where:{id}});
        return produto ? new Produto(
            produto.id, 
            produto.nome, 
            produto.status, 
            produto.dataCadastro, 
            produto.produtorecoVenda, 
            produto.produtorecoComprodutora,  
            produto.descricao || ``, 
            produto.quantidadeEstoque, 
            produto.idCategoria
        ):null;
    }

    async update(id:string, produto: Produto): Promise<void>{
        await prisma.produto.update({
            where: {id},
            data: {
                nome: produto.nome,
                status: produto.status,
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



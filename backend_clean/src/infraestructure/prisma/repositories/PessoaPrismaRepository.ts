import { Pessoa } from '../../../domain/entities/Pessoa';
import {IPessoaRepository} from '../../../domain/repositories/IPessoaRepository';
import {prisma} from "../client";

export class PessoaPrismaRepository implements IPessoaRepository {
    async create(pessoa: Pessoa): Promise<void>{
        // await prisma.produto.create({
        //     data: {
                
        //     }
        // });
    }

    async findAll(): Promise<Pessoa[]>{
        const pessoas = await prisma.pessoa.findMany();
        // return usuarios.map((p: { id: string; nome: string; preco: number; descricao: string | null; quantidadeEstoque: number; categoriaId: number }) => new Produto(
        //     p.id,p.nome, p.preco, p.descricao || ``, p.quantidadeEstoque, p.categoriaId
        // ));

    }

    async findById(id: string): Promise<Pessoa | null>{
        const pessoa = await prisma.produto.findUnique({where:{id},});
        // return usuario ? new Usuario(
            
        // ):null;
    }

    async update(id:string, pessoa: Pessoa): Promise<void>{
        // await prisma.pessoa.update({
        //     where: {id},
        //     data: {
                
        //     }
        // });
    }

    async delete(id:string): Promise<void>{
        await prisma.pessoa.delete({where:{id}})
    }
}



import { Pessoa } from '../../../domain/entities/Pessoa';
import {IPessoaRepository} from '../../../domain/repositories/IPessoaRepository';
import {prisma} from "../client";

export class PessoaPrismaRepository implements IPessoaRepository {
    async create(pessoa: Pessoa): Promise<void>{
        await prisma.Pessoa.create({
            data: {
                nome: pessoa.nome,
                cliente: pessoa.cliente,
                funcionario: pessoa.funcionario
            }
        });
    }

    async findAll(): Promise<Pessoa[]>{
        const pessoas = await prisma.Pessoa.findMany();
        return pessoas.map((p: { id: string; nome: string; cliente: boolean; funcionario: boolean}) => new Pessoa(
            p.id, 
            p.nome, 
            p.cliente, 
            p.funcionario
        ));

    }

    async findById(id: string): Promise<Pessoa | null>{
        const pessoa = await prisma.Pessoa.findUnique({where:{id}});
        return pessoa ? new Pessoa(
            pessoa.id, 
            pessoa.nome, 
            pessoa.cliente, 
            pessoa.funcionario
        ):null;
    }

    async update(id:string, pessoa: Pessoa): Promise<void>{
        await prisma.Pessoa.update({
            where: {id},
            data: {
                nome: pessoa.nome,
                cliente: pessoa.cliente,
                funcionario: pessoa.funcionario
            }
        });
    }

    async delete(id:string): Promise<void>{
        await prisma.Pessoa.delete({where:{id}})
    }
}



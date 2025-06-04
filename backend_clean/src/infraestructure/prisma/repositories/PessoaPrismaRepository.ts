import { TipoPessoa } from '@prisma/client';
import { Pessoa } from '../../../domain/entities/Pessoa';
import {IPessoaRepository} from '../../../domain/repositories/IPessoaRepository';
import {prisma} from "../client";

export class PessoaPrismaRepository implements IPessoaRepository {
    async create(pessoa: Pessoa): Promise<void>{
        await prisma.pessoa.create({
            data: {
                id: pessoa.id,
                nome: pessoa.nome,
                tipoPessoa: pessoa.tipoPessoa
            }
        });
    }

    async findAll(): Promise<Pessoa[]>{
        const pessoas = await prisma.pessoa.findMany();
        return pessoas.map((p: { id: string; nome: string; tipoPessoa: TipoPessoa}) => new Pessoa(
            p.id,
            p.nome, 
            p.tipoPessoa
        ));

    }

    async findById(id: string): Promise<Pessoa | null>{
        const pessoa = await prisma.pessoa.findUnique({where:{id}});
        return pessoa ? new Pessoa(
            pessoa.id,
            pessoa.nome,
            pessoa.tipoPessoa
        ):null;
    }

    async update(id:string, pessoa: Pessoa): Promise<void>{
        await prisma.pessoa.update({
            where: {id},
            data: {
                nome: pessoa.nome,
                tipoPessoa: pessoa.tipoPessoa
            }
        });
    }

    async delete(id:string): Promise<void>{
        await prisma.pessoa.delete({where:{id}})
    }
}



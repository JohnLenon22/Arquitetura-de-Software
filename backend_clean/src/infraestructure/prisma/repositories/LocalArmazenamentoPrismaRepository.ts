import { LocalArmazenamento } from "../../../domain/entities/LocalArmazenamento";
import { ILocalArmazenamentoRepository } from "../../../domain/repositories/ILocalArmazenamentoRepository";
import { prisma } from "../client";

export class LocalArmazenamentoPrismaRepository implements ILocalArmazenamentoRepository {

    async create(local: LocalArmazenamento): Promise<void>{
        await prisma.LocalArmazenamento.create({
            data:{
                id: local.id,
                nome: local.nome,
                endereco: local.endereco,
                responsavel: local.responsavel
            }
        })
    }

    async findAll(): Promise<LocalArmazenamento[]>{
        const locais = await prisma.LocalArmazenamento.findMany()
        return locais.map((l: {id: string; nome: string; endereco: string; responsavel: string}) => new LocalArmazenamento(
            l.id,
            l.nome,
            l.endereco,
            l.responsavel
        ))
    }

    async findById(id: string): Promise<LocalArmazenamento | null>{
        const local = await prisma.LocalArmazenamento.findUnique({where: {id}});
        return local ? new LocalArmazenamento(
            local.id,
            local.nome,
            local.endereco,
            local.responsavel
        ):null;
    }

    async update(id: string, localArmazenamento: LocalArmazenamento): Promise<void>{
        await prisma.localArmazenamento.update({
            where: {id},
            data: {
                nome: localArmazenamento.nome,
                endereco: localArmazenamento.endereco,
                responsavel: localArmazenamento.responsavel
            }
        });
    }

    async delete(id: string): Promise<void>{
        await prisma.LocalArmazenamento.delete({where:{id}})
    }
}
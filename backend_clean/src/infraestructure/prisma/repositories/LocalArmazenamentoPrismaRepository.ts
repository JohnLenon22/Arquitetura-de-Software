import { LocalArmazenamento } from "../../../domain/entities/LocalArmazenamento";
import { ILocalArmazenamentoRepository } from "../../../domain/repositories/ILocalArmazenamentoRepository";
import { prisma } from "../client";

export class LocalArmazenamentoPrismaRepository implements ILocalArmazenamentoRepository {
    async create(localArmazenamento: LocalArmazenamento): Promise<void>{
        await prisma.localArmazenamento.create({
            data: {
                id: crypto.randomUUID(),
                nome: localArmazenamento.nome,
                endereco: localArmazenamento.endereco,
                responsavel: localArmazenamento.responsavel
            }
        })
    }

    async findById(id: string): Promise<LocalArmazenamento | null>{
        const localArmazenamento = await prisma.localArmazenamento.findUnique({where:{id}});
        return localArmazenamento ? new LocalArmazenamento(
            localArmazenamento.id,
            localArmazenamento.nome,
            localArmazenamento.endereco,
            localArmazenamento.responsavel
        ):null;
    }

    async findAll(): Promise<LocalArmazenamento[]>{
        const locaisArmazenamento = await prisma.localArmazenamento.findMany()
        return locaisArmazenamento.map((l: {id: string; nome: string; endereco: string; responsavel: string}) => new LocalArmazenamento(
            l.id,
            l.nome,
            l.endereco,
            l.responsavel
        ));
    }

    async update(id: string, localArmazenamento: LocalArmazenamento): Promise<void>{
        await prisma.localArmazenamento.update({
            where:{id},
            data: {
                nome: localArmazenamento.nome,
                endereco: localArmazenamento.endereco,
                responsavel: localArmazenamento.responsavel
            }
        })
    }

    async delete(id: string): Promise<void>{
        await prisma.localArmazenamento.delete({where: {id}})
    }
}
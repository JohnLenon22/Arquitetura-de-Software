import { Categoria } from "../../../domain/entities/Categoria";
import { ICategoriaRepository } from "../../../domain/repositories/ICategoriaRepository";
import { prisma } from "../client";

export class CategoriaPrismaRepository implements ICategoriaRepository {

    async create(categoria: Categoria): Promise<void>{
        await prisma.Categoria.create({
            data:{
                id: categoria.id,
                nome: categoria.nome,
            }
        })
    }

    async findAll(): Promise<Categoria[]>{
        const locais = await prisma.Categoria.findMany()
        return locais.map((l: {id: string; nome: string}) => new Categoria(
            l.id,
            l.nome,
        ))
    }

    async findById(id: string): Promise<Categoria | null>{
        const categoria = await prisma.Categoria.findUnique({where: {id}});
        return categoria ? new Categoria(
            categoria.id,
            categoria.nome,
        ):null;
    }

    async update(id: string, categoria: Categoria): Promise<void>{
        await prisma.Categoria.update({
            where: {id},
            data: {
                nome: categoria.nome,
            }
        });
    }

    async delete(id: string): Promise<void>{
        await prisma.Categoria.delete({where:{id}})
    }
}
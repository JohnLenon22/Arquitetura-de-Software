import { Categoria } from "../../../domain/entities/Categoria";
import { ICategoriaRepository } from "../../../domain/repositories/ICategoriaRepository";
import { prisma } from "../client";

export class CategoriaPrismaRepository implements ICategoriaRepository {
    async create(categoria: Categoria): Promise<void>{
        await prisma.categoria.create({
            data:{
                nome: categoria.nome
            }
        })
    }

    async findById(id: number): Promise<Categoria | null>{
        const categoria = await prisma.categoria.findUnique({where:{id}})
        return categoria ? new Categoria(
            categoria.id,
            categoria.nome
        ):null;
    }

    async findAll(): Promise<Categoria[]>{
        const categorias = await prisma.categoria.findMany()
        return categorias.map((c: {id: number, nome: string}) => new Categoria(
            c.id,
            c.nome
        ))   
    }

    async update(id: number, categoria: Categoria): Promise<void>{
        await prisma.categoria.update({
            where:{id},
            data:{
                nome: categoria.nome
            }
        })
    }

    async delete(id: number): Promise<void>{
        await prisma.categoria.delete({where:{id}})
    }
}
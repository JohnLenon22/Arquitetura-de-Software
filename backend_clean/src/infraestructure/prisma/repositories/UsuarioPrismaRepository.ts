import { Usuario } from '../../../domain/entities/Usuario';
import {IUsuarioRepository} from '../../../domain/repositories/IUsuarioRepository';
import {prisma} from "../client";

export class UsuarioPrismaRepository implements IUsuarioRepository {
    async create(usuario: Usuario): Promise<void>{
        // await prisma.produto.create({
        //     data: {
                
        //     }
        // });
    }

    async findAll(): Promise<Usuario[]>{
        const usuarios = await prisma.usuario.findMany();
        // return usuarios.map((p: { id: string; nome: string; preco: number; descricao: string | null; quantidadeEstoque: number; categoriaId: number }) => new Produto(
        //     p.id,p.nome, p.preco, p.descricao || ``, p.quantidadeEstoque, p.categoriaId
        // ));

    }

    async findById(id: string): Promise<Usuario | null>{
        const usuario = await prisma.produto.findUnique({where:{id},});
        // return usuario ? new Usuario(
            
        // ):null;
    }

    async update(id:string, usuario: Usuario): Promise<void>{
        await prisma.usuario.update({
            where: {id},
            data: {
                
            }
        });
    }

    async delete(id:string): Promise<void>{
        await prisma.usuario.delete({where:{id}})
    }
}



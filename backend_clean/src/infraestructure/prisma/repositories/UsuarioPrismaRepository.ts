import { Usuario } from '../../../domain/entities/Usuario';
import {IUsuarioRepository} from '../../../domain/repositories/IUsuarioRepository';
import {prisma} from "../client";

export class UsuarioPrismaRepository implements IUsuarioRepository {
    async create(usuario: Usuario): Promise<void>{
        await prisma.usuario.create({
            data: {
                id: crypto.randomUUID(),
                idPessoa: usuario.idPessoa,
                email: usuario.email,
                senhaHash: usuario.senhaHash
            }
        });
    }

    async findAll(): Promise<Usuario[]>{
        const usuarios = await prisma.usuario.findMany();
        return usuarios.map((user: { id: string; idPessoa: string; email: string; senhaHash: string}) => new Usuario(
            user.id, 
            user.idPessoa, 
            user.email, 
            user.senhaHash
        ));

    }

    async findById(id: string): Promise<Usuario | null>{
        const usuario = await prisma.usuario.findUnique({where:{id}});
        return usuario ? new Usuario(
            usuario.id, 
            usuario.idPessoa, 
            usuario.email, 
            usuario.senhaHash
        ):null;
    }

    async update(id:string, usuario: Usuario): Promise<void>{
        await prisma.usuario.update({
            where: {id},
            data: {
                idPessoa: usuario.idPessoa,
                email: usuario.email,
                senhaHash: usuario.senhaHash,
            }
        });
    }

    async delete(id:string): Promise<void>{
        await prisma.usuario.delete({where:{id}})
    }
}



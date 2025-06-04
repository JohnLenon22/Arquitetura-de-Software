import { Usuario } from '../../../domain/entities/Usuario';
import {IUsuarioRepository} from '../../../domain/repositories/IUsuarioRepository';
import {prisma} from "../client";
import { TipoUsuario } from '@prisma/client';

export class UsuarioPrismaRepository implements IUsuarioRepository {
    async create(usuario: Usuario): Promise<void>{
        await prisma.usuario.create({
            data: {
                id: usuario.id,
                idPessoa: usuario.idPessoa,
                email: usuario.email,
                senhaHash: usuario.senhaHash,
                tipoUsuario: usuario.tipoUsuario
            }
        });
    }

    async findAll(): Promise<Usuario[]>{
        const usuarios = await prisma.usuario.findMany();
        return usuarios.map((user: { id: string; idPessoa: string; email: string; senhaHash: string, tipoUsuario: TipoUsuario}) => new Usuario(
            user.id,user.idPessoa, user.email, user.senhaHash, user.tipoUsuario
        ));

    }

    async findById(id: string): Promise<Usuario | null>{
        const usuario = await prisma.usuario.findUnique({where:{id}});
        return usuario ? new Usuario(
            usuario.id, usuario.idPessoa, usuario.email, usuario.senhaHash, usuario.tipoUsuario
        ):null;
    }

    async update(id:string, usuario: Usuario): Promise<void>{
        await prisma.usuario.update({
            where: {id},
            data: {
                idPessoa: usuario.idPessoa,
                email: usuario.email,
                senhaHash: usuario.senhaHash,
                tipoUsuario: usuario.tipoUsuario
            }
        });
    }

    async delete(id:string): Promise<void>{
        await prisma.usuario.delete({where:{id}})
    }
}



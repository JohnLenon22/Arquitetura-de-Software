import { json } from 'stream/consumers';
import { Usuario } from '../../../domain/entities/Usuario';
import {IUsuarioRepository} from '../../../domain/repositories/IUsuarioRepository';
import {prisma} from "../client";
import { TipoUsuario } from '@prisma/client';

export class UsuarioPrismaRepository implements IUsuarioRepository {
    async create(usuario: Usuario): Promise<void>{
        await prisma.usuario.create({
            data: {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email,
                senhaHash: usuario.senhaHash,
                tipoUsuario: usuario.tipoUsuario
            }
        });
    }

    async findAll(): Promise<Usuario[]>{
        const usuarios = await prisma.usuario.findMany();
        return usuarios.map((user: { id: string; nome: string; email: string; senhaHash: string, tipoUsuario: TipoUsuario}) => new Usuario(
            user.id,
            user.nome,
            user.email, 
            user.senhaHash, 
            user.tipoUsuario
        ));

    }

    async findById(id: string): Promise<Usuario | null>{
        const usuario = await prisma.usuario.findUnique({where:{id}});
        return usuario ? new Usuario(
            usuario.id,
            usuario.nome,
            usuario.email, 
            usuario.senhaHash, 
            usuario.tipoUsuario
        ):null;
    }

    async findLogin(email: string, senhaHash: string): Promise<string | null>{
        const usuario = await prisma.usuario.findUnique({
            where: { email }
        });
        if (usuario && usuario.senhaHash === senhaHash) {
            return usuario.id;
        } else {
            return null;
        }
    }

    async update(id:string, usuario: Usuario): Promise<void>{
        await prisma.usuario.update({
            where: {id},
            data: {
                nome: usuario.nome,
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



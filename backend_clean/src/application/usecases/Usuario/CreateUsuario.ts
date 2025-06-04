import { IUsuarioRepository } from "../../../domain/repositories/IUsuarioRepository";
import { Usuario } from "../../../domain/entities/Usuario";
import { randomUUID } from "crypto";
import { TipoUsuario } from "@prisma/client";

export class CreateUsuario {
    constructor(private usuarioRep: IUsuarioRepository){}

    async execute(idPessoa: string, email: string , senhaHash:string, tipoUsuario: TipoUsuario): Promise<void>{
        const usuario = new Usuario(
            randomUUID(),
            idPessoa,
            email, 
            senhaHash,
            tipoUsuario
            
        )
        await this.usuarioRep.create(usuario);
    }

}
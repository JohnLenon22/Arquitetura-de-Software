import { IUsuarioRepository } from "../../../domain/repositories/IUsuarioRepository";
import { Usuario } from "../../../domain/entities/Usuario";
import { randomUUID } from "crypto";

export class CreateUsuario {
    constructor(private usuarioRep: IUsuarioRepository){}

    async execute(idPessoa: string, email: string , senhaHash:string): Promise<void>{
        const usuario = new Usuario(
            randomUUID(),
            idPessoa,
            email, 
            senhaHash
            
        )
        await this.usuarioRep.create(usuario);
    }

}
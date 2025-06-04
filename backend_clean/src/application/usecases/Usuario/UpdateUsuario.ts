import { TipoUsuario } from "@prisma/client";
import { Usuario } from "../../../domain/entities/Usuario";
import { IUsuarioRepository } from "../../../domain/repositories/IUsuarioRepository";

export class UpdateUsuario {
    constructor(private usuarioRep: IUsuarioRepository){}

    async execute(id:string, idPessoa: string, email: string , senhaHash:string, tipoUsuario: TipoUsuario){
        const usuario  = new Usuario( id, idPessoa, email , senhaHash, tipoUsuario )
        await this.usuarioRep.update(id, usuario);
    }

}
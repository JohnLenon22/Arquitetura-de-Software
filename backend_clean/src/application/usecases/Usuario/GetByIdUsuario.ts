import { Usuario } from "@prisma/client";
import { IUsuarioRepository } from "../../../domain/repositories/IUsuarioRepository";

export class GetByIdUsuario {
    constructor(private usuarioRep: IUsuarioRepository){}

    async execute(id:string){
        return await this.usuarioRep.findById(id);
    }

}
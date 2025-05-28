import { IUsuarioRepository } from "../../../domain/repositories/IUsuarioRepository";

export class GetUsuario {
    constructor(private usuarioRep: IUsuarioRepository){}

    async execute(){
        await this.usuarioRep.findAll();
    }

}
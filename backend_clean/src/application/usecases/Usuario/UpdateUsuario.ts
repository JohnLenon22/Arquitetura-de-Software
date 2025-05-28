import { IUsuarioRepository } from "../../../domain/repositories/IUsuarioRepository";

export class UpdateUsuario {
    constructor(private usuarioRep: IUsuarioRepository){}

    async execute(id:string){
        await this.usuarioRep.findById(id);
    }

}
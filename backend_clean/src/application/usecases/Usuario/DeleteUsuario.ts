import { IUsuarioRepository } from "../../../domain/repositories/IUsuarioRepository";

export class DeleteUsuario {
    constructor(private usuarioRep: IUsuarioRepository){}

    async execute(id:string){
        await this.usuarioRep.delete(id);
    }

}
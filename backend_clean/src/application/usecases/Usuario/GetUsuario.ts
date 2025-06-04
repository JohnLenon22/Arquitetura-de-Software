import { IUsuarioRepository } from "../../../domain/repositories/IUsuarioRepository";

export class GetUsuario {
    constructor(private usuarioRepo: IUsuarioRepository){}

    async execute(){
        return await this.usuarioRepo.findAll();
    }

}
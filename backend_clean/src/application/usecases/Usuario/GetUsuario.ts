import { IUsuarioRepository } from "../../../domain/repositories/IUsuarioRepository";
import { ListUsuarioInputDto, ListUsuarioOutputDto } from "../../dto/Usuario/ListUsuarioDto";
import { UseCase } from "../UseCase";

export class GetUsuario implements UseCase<ListUsuarioInputDto, ListUsuarioOutputDto>{
    constructor(private usuarioRepo: IUsuarioRepository){}

    async execute(): Promise<ListUsuarioOutputDto>{
        const usuarios = await this.usuarioRepo.findAll();
        const OutputDTO: ListUsuarioOutputDto = usuarios.map( usuario => ({
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            senhaHash: usuario.senhaHash,
            tipoUsuario: usuario.tipoUsuario
        }))
        return OutputDTO;
    }

}
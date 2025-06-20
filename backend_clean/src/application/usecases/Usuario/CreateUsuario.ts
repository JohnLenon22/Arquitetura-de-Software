import { IUsuarioRepository } from "../../../domain/repositories/IUsuarioRepository";
import { Usuario } from "../../../domain/entities/Usuario";
import { randomUUID } from "crypto";
import { TipoUsuario } from "@prisma/client";
import { CreateUsuarioInputDto, CreateUsuarioOutputDto } from "../../dto/Usuario/CreateUsuarioDto";
import { UseCase } from "../UseCase";
export class CreateUsuario implements UseCase<CreateUsuarioInputDto, CreateUsuarioOutputDto>{
    constructor(private usuarioRep: IUsuarioRepository){}

    async execute(InputDTO: CreateUsuarioInputDto): Promise<CreateUsuarioOutputDto>{
        const usuario = new Usuario(
            randomUUID(),
            InputDTO.nome,
            InputDTO.idPessoa,           
            InputDTO.email,             
            InputDTO.senhaHash,
            InputDTO.tipoUsuario
            
        )
        await this.usuarioRep.create(usuario);
        const OutputDTO: CreateUsuarioOutputDto = {message: `Usuário criado com sucesso\n ID: ${usuario.id}`};
        return OutputDTO;
    }

}
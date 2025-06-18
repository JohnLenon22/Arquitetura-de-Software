import { TipoUsuario } from "@prisma/client";
import { Usuario } from "../../../domain/entities/Usuario";
import { IUsuarioRepository } from "../../../domain/repositories/IUsuarioRepository";
import { UpdateUsuarioInputDto, UpdateUsuarioOutputDto } from "../../dto/Usuario/UpdateUsuarioDto";
import { UseCase } from "../UseCase";

export class UpdateUsuario implements UseCase<UpdateUsuarioInputDto, UpdateUsuarioOutputDto>{
    constructor(private usuarioRep: IUsuarioRepository){}

    async execute(InputDTO: UpdateUsuarioInputDto): Promise<UpdateUsuarioOutputDto>{
        const usuario  = new Usuario( InputDTO.id, InputDTO.nome, InputDTO.idPessoa, InputDTO.email , InputDTO.senhaHash, InputDTO.tipoUsuario )
        await this.usuarioRep.update(InputDTO.id, usuario);
        const OutputDTO: UpdateUsuarioOutputDto = {message: ` Usuario atualizado com sucesso\nID: ${InputDTO.id}`};
        return OutputDTO;
    }

}
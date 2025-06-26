import { Usuario } from "@prisma/client";
import { IUsuarioRepository } from "../../../domain/repositories/IUsuarioRepository";
import { loginUsuarioInputDto, loginUsuarioOutputDto } from "../../dto/Usuario/loginUsuarioDto";
import { UseCase } from "../UseCase";


export class LoginUsuario implements UseCase<loginUsuarioInputDto, loginUsuarioOutputDto>{
    constructor(private usuarioRep: IUsuarioRepository){}

    async execute(InputDTO: loginUsuarioInputDto): Promise<loginUsuarioOutputDto>{
        const id = await this.usuarioRep.findLogin(InputDTO.email, InputDTO.senhaHash);

        if (!id) {
            throw new Error("Usuário não encontrado com este email.");
        }

        const OutputDto: loginUsuarioOutputDto = {id}
        return OutputDto;
        }

}
import { Usuario } from "@prisma/client";
import { IUsuarioRepository } from "../../../domain/repositories/IUsuarioRepository";
import { GetByIdUsuarioInputDto, GetByIdUsuarioOutputDto } from "../../dto/Usuario/GetByIdUsuarioDto";
import { UseCase } from "../UseCase";


export class GetByIdUsuario implements UseCase<GetByIdUsuarioInputDto, GetByIdUsuarioOutputDto>{
    constructor(private usuarioRep: IUsuarioRepository){}

    async execute(InputDTO: GetByIdUsuarioInputDto): Promise<GetByIdUsuarioOutputDto>{
        const usuario = await this.usuarioRep.findById(InputDTO.id);
        if(usuario){
            const OutputDTO: GetByIdUsuarioOutputDto = {
                nome: usuario.nome,
                idPessoa: usuario.idPessoa,
                email: usuario.email,
                senhaHash: usuario.senhaHash,
                tipoUsuario: usuario.tipoUsuario,
            }
            return OutputDTO;
        }else{
            throw new Error("Usuario não encontrado");
        }
    }

}
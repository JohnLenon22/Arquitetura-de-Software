import { IUsuarioRepository } from "../../../domain/repositories/IUsuarioRepository";
import { DeleteUsuarioInputDto, DeleteUsuarioOutputDto } from "../../dto/Usuario/DeleteUsuarioDto";
import { UseCase } from "../UseCase";
export class DeleteUsuario implements UseCase<DeleteUsuarioInputDto, DeleteUsuarioOutputDto>{
    constructor(private usuarioRep: IUsuarioRepository){}

    async execute(InputDTO: DeleteUsuarioInputDto): Promise<DeleteUsuarioOutputDto>{
        await this.usuarioRep.delete(InputDTO.id);
        const OutputDTO: DeleteUsuarioOutputDto = {message: `Usuario deletado com sucesso`};
        return OutputDTO;
    }

}
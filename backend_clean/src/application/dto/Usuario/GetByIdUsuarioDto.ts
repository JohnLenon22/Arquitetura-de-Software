import { TipoUsuario } from "@prisma/client";

export type GetByIdUsuarioInputDto = {
    id: string;
}

export type GetByIdUsuarioOutputDto = {
    nome: string;
    idPessoa: string;
    email: string;
    senhaHash: string;
    tipoUsuario: TipoUsuario;

}
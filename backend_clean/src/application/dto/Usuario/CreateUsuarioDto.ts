import { TipoUsuario } from "@prisma/client";

export type CreateUsuarioInputDto = {
    nome: string;
    idPessoa: string;           
    email: string;             
    senhaHash: string;
    tipoUsuario: TipoUsuario;
}

export type CreateUsuarioOutputDto = {
    message: string;
}
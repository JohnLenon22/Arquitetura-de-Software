import { TipoUsuario } from "@prisma/client";

export type UpdateUsuarioInputDto = {
    id: string;
    nome: string;
    idPessoa: string;           
    email: string;             
    senhaHash: string;
    tipoUsuario: TipoUsuario;
}

export type UpdateUsuarioOutputDto = {
    message: string;
}
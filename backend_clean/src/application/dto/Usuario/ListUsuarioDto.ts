import { TipoUsuario } from "@prisma/client"

export type ListUsuarioInputDto = void
export type ListUsuarioOutputDto = {
    id: string;
    nome: string;
    email:string;            
    senhaHash:string;
    tipoUsuario:TipoUsuario
}[]
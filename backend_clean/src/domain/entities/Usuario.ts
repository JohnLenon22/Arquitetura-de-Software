import { TipoUsuario } from "@prisma/client";

export class Usuario{
    constructor(
        public readonly id: string,
        public nome: string,
        public email: string,
        public senhaHash: string,
        public tipoUsuario: TipoUsuario
    ){
        if(!nome || nome.trim() === "" ) throw new Error("O nome do usuário não pode ser vazio");
        if(senhaHash.length < 8) throw new Error("Senha deve conter no mínimo 8 caracteres")
    }
}
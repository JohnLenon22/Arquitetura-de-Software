import { TipoUsuario } from "@prisma/client";

export class Usuario{
    constructor(
        public readonly id: string,
        public nome: string,
        public idPessoa: string,
        public email: string,
        public senhaHash: string,
        public tipoUsuario: TipoUsuario
    ){
        if (senhaHash.length < 8) throw new Error("Senha deve conter no mínimo 8 caracteres")
    }
}
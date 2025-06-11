import { TipoPessoa } from "@prisma/client";

export type CreatesuarioInputDto = {
    nome: string;
    tipoPessoa: TipoPessoa
}

export type CreatesuarioOutputDto = {
    id: string;
}
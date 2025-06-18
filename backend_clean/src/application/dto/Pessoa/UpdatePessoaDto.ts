import { TipoPessoa } from "@prisma/client";

export type UpdatePessoaInputDto = {
    id: string;
    nome: string;
    tipoPessoa: TipoPessoa
}

export type UpdatePessoaOutputDto = {
    message: string;
}
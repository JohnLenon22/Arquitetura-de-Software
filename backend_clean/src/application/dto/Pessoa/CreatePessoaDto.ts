import { TipoPessoa } from "@prisma/client";

export type CreatePessoaInputDto = {
    nome: string;
    tipoPessoa: TipoPessoa
}

export type CreatePessoaOutputDto = {
    id: string
}

import { TipoPessoa } from "@prisma/client";

export type GetByIdPessoaInputDto = {
    id: string;
}

export type GetByIdPessoaOutputDto = {
    nome: string;
    tipoPessoa: TipoPessoa
}
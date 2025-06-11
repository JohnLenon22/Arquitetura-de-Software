import { TipoPessoa } from "@prisma/client";

export type ListPessoaInputDto = void
export type ListPessoaOutputDto = {
    id:string;
    nome: string;
    tipoPessoa: TipoPessoa;
}[]

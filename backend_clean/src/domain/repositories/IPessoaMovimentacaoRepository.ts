import { PessoaMovimentacao } from "../entities/PessoaMovimentacao";

export interface IPessoaMovimentacaoRepository {
    create(pessoaMovimentacao: PessoaMovimentacao): Promise<void>;
    findById(id: string): Promise<PessoaMovimentacao | null>;
    findAll(): Promise<PessoaMovimentacao[]>;
    update(id: string, pessoaMovimentacao: PessoaMovimentacao): Promise<void>;
    delete(id: string): Promise<void>;

}
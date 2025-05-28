import { MovimentacaoEstoque } from "../entities/MovimentacaoEstoque";

export interface IMovimentacaoEstoqueRepository {
    create(movimentacaoEstoque: MovimentacaoEstoque): Promise<void>;
    findById(id: string): Promise<MovimentacaoEstoque | null>;
    findAll(): Promise<MovimentacaoEstoque[]>;
    update(id: string, movimentacaoEstoque: MovimentacaoEstoque): Promise<void>;
    delete(id: string): Promise<void>;

}
import {Produto} from '../entities/Produto';

export interface IProdutoRepository {
    create(produto: Produto): Promise<void>;
    updateQuantidade(id: string, novaQuantidade: number): Promise<void>
    findById(id: string): Promise<Produto | null>;
    findAll(): Promise<Produto[]>;
    update(id: string, produto: Produto): Promise<void>;
    delete(id: string): Promise<void>;

}
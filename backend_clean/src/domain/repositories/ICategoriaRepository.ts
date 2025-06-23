import { Categoria } from "../entities/Categoria";

export interface ICategoriaRepository {
    create(categoria: Categoria): Promise<Categoria>;
    findById(id: number): Promise<Categoria | null>;
    findAll(): Promise<Categoria[]>;
    update(id: number, categoria: Categoria): Promise<void>;
    delete(id: number): Promise<void>;

}
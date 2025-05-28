import { Categoria } from "../entities/Categoria";

export interface ICategoriaRepository {
    create(categoria: Categoria): Promise<void>;
    findById(id: string): Promise<Categoria | null>;
    findAll(): Promise<Categoria[]>;
    update(id: string, categoria: Categoria): Promise<void>;
    delete(id: string): Promise<void>;

}
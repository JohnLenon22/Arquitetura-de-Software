import { Pessoa } from "../entities/Pessoa";

export interface IPessoaRepository {
    create(pessoa: Pessoa): Promise<void>;
    findById(id: string): Promise<Pessoa | null>;
    findAll(): Promise<Pessoa[]>;
    update(id: string, pessoa: Pessoa): Promise<void>;
    delete(id: string): Promise<void>;

}
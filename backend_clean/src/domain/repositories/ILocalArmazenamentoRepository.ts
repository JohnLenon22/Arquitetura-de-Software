import { LocalArmazenamento } from "../entities/LocalArmazenamento";

export interface ILocalArmazenamentoRepository {
    create(localArmazenamento: LocalArmazenamento): Promise<void>;
    findById(id: string): Promise<LocalArmazenamento | null>;
    findAll(): Promise<LocalArmazenamento[]>;
    update(id: string, localArmazenamento: LocalArmazenamento): Promise<void>;
    delete(id: string): Promise<void>;

}
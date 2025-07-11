import { Usuario } from "../entities/Usuario";

export interface IUsuarioRepository {
    create(usuario: Usuario): Promise<void>;
    findById(id: string): Promise<Usuario | null>;
    findLogin(email: string, senhaHash: string): Promise<string | null>;    
    findAll(): Promise<Usuario[]>;
    update(id: string, usuario: Usuario): Promise<void>;
    delete(id: string): Promise<void>;

}
export type loginUsuarioInputDto = {
    email: string;
    senhaHash: string;
}
export type loginUsuarioOutputDto = {
    id: string | null;
}
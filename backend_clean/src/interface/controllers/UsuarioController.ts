import { Request, Response } from "express";
import { CreateUsuario } from "../../application/usecases/Usuario/CreateUsuario";
import { GetUsuario } from "../../application/usecases/Usuario/GetUsuario";
import { UpdateUsuario } from "../../application/usecases/Usuario/UpdateUsuario";
import { DeleteUsuario } from "../../application/usecases/Usuario/DeleteUsuario";
import { GetByIdUsuario } from "../../application/usecases/Usuario/GetByIdUsuario";

import { UsuarioPrismaRepository } from "../../infraestructure/prisma/repositories/UsuarioPrismaRepository";
const usuarioRepo = new UsuarioPrismaRepository();

const createProduto = new CreateUsuario(usuarioRepo);
const getUsuario = new GetUsuario(usuarioRepo);
const getByIdUsuario = new GetByIdUsuario(usuarioRepo);
const updateUsuario = new UpdateUsuario(usuarioRepo);
const deleteUsuario = new DeleteUsuario(usuarioRepo);

export class UsuarioController{
    async create(req: Request, res:Response){
        const {idPessoa, email, senhaHash, tipoUsuario} = req.body;
        try{
            await createProduto.execute(idPessoa, email, senhaHash, tipoUsuario)
            res.status(201).json({message: `Usuario de nome "${email}" criado com sucesso`})
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    }

    async list(req: Request, res:Response){
        const produtos = await getUsuario.execute()
        res.json(produtos)
    }

    async getById(req: Request, res:Response){
        const {id} = req.params
        const produto = await getByIdUsuario.execute(id)
        res.json(produto)
    }

    async update(req: Request, res:Response){
        const {id} = req.params
        const {idPessoa, email, senhaHash, tipoUsuario} = req.body
        try{
            await updateUsuario.execute(id, idPessoa, email, senhaHash, tipoUsuario)
            res.status(200).json({message: `Usuario atualizado com sucesso`})
        }catch(err: any){
            res.status(400).json({error: err.message})

        }
    }

    async delete(req: Request, res:Response){
        const {id} = req.params
        try{
            await deleteUsuario.execute(id)
            res.status(200).json({message: `Usuario deletado com sucesso`})

        }catch(err: any){
            res.status(400).json({ error: err.message });
        }
    }

}
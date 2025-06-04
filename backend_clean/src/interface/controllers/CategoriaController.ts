import { Request, Response } from "express";
import { GetCategoria } from "../../application/usecases/Categoria/GetCategoria";
import { GetByIdCategoria } from "../../application/usecases/Categoria/GetByIdCategoria";
import { CreateCategoria } from "../../application/usecases/Categoria/CreateCategoria";
import { UpdateCategoria } from "../../application/usecases/Categoria/UpdateCategoria";
import { DeleteCategoria } from "../../application/usecases/Categoria/DeleteCategoria";

import { CategoriaPrismaRepository } from "../../infraestructure/prisma/repositories/CategoriaPrismaRepository";
const CategoriaRepo = new CategoriaPrismaRepository();

const createCategoria = new CreateCategoria(CategoriaRepo);
const getCategoria = new GetCategoria(CategoriaRepo);
const getByIdCategoria = new GetByIdCategoria(CategoriaRepo);
const updateCategoria = new UpdateCategoria(CategoriaRepo);
const deleteCategoria = new DeleteCategoria(CategoriaRepo);

export class CategoriaController{
    async create(req: Request, res:Response){
        const { nome } = req.body
        try{
            await createCategoria.execute(nome)
            res.status(201).json({message: `Categoria criada com sucesso`})
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    }

    async list(req: Request, res:Response){
        const categorias = await getCategoria.execute()
        res.json(categorias)
    }

    async getById(req: Request, res:Response){
        const { id } = req.params
        const categoria = await getByIdCategoria.execute(id)
        res.json(categoria)
    }

    async update(req: Request, res:Response){
        const { id } = req.params
        const { nome } = req.body
        try{
            await updateCategoria.execute(id, nome)
            res.status(200).json({message: `Categoria atualizada com sucesso`})
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    }

    async delete(req: Request, res:Response){
        const {id} = req.params
        try{
            await deleteCategoria.execute(id)
            res.status(200).json({message: `Categoria deletada com sucesso`})

        }catch(err: any){
            res.status(400).json({ error: err.message });
        }
    }
}



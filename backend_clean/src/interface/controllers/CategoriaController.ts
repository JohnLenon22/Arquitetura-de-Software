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
            const result = await createCategoria.execute(nome)
            res.status(201).json(result.message)
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    }

    async list(req: Request, res:Response){
        try{
            const categorias = await getCategoria.execute()
            res.json(categorias)
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    }

    async getById(req: Request, res:Response){
        const { id } = req.params
        try{
            const categoria = await getByIdCategoria.execute({ id: Number(id) })
            res.json(categoria)
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
        
    }

    async update(req: Request, res:Response){
        const { id } = req.params
        const { nome } = req.body
        try{
            const categoria = await updateCategoria.execute({ id: Number(id), nome })
            res.status(200).json(categoria.message)
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    }

    async delete(req: Request, res:Response){
        const {id} = req.params
        
        try{
            const categoria = await deleteCategoria.execute({ id: Number(id) })
            res.status(200).json(categoria.message)

        }catch(err: any){
            res.status(400).json({ error: err.message });
        }
    }
}



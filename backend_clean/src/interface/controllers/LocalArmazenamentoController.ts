import { Request, Response } from "express";
import { GetLocalArmazenamento } from "../../application/usecases/LocalArmazenamento/GetLocalArmazenamento";
import { GetByIdLocalArmazenamento } from "../../application/usecases/LocalArmazenamento/GetByIdLocalArmazenamento";
import { CreateLocalArmazenamento } from "../../application/usecases/LocalArmazenamento/CreateLocalArmazenamento";
import { UpdateLocalArmazenamento } from "../../application/usecases/LocalArmazenamento/UpdateLocalArmazenamento";
import { DeleteLocalArmazenamento } from "../../application/usecases/LocalArmazenamento/DeleteLocalArmazenamento";

import { LocalArmazenamentoPrismaRepository } from "../../infraestructure/prisma/repositories/LocalArmazenamentoPrismaRepository";
const LocalArmazenamentoRepo = new LocalArmazenamentoPrismaRepository();

const createLocalArmazenamento = new CreateLocalArmazenamento(LocalArmazenamentoRepo);
const getLocalArmazenamento = new GetLocalArmazenamento(LocalArmazenamentoRepo);
const getByIdLocalArmazenamento = new GetByIdLocalArmazenamento(LocalArmazenamentoRepo);
const updateLocalArmazenamento = new UpdateLocalArmazenamento(LocalArmazenamentoRepo);
const deleteLocalArmazenamento = new DeleteLocalArmazenamento(LocalArmazenamentoRepo);

export class LocalArmazenamentoController{
    async create(req: Request, res:Response){
        const { nome, endereco, responsavel } = req.body
        try{
            const local = await createLocalArmazenamento.execute({nome, endereco, responsavel})
            res.status(201).json(local.message)
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    }

    async list(req: Request, res:Response){
        try{
            const LocalArmazenamentos = await getLocalArmazenamento.execute()
            res.json(LocalArmazenamentos)
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    }

    async getById(req: Request, res:Response){
        const { id } = req.params
        try{
            const localArmazenamento = await getByIdLocalArmazenamento.execute({id})
            res.json(localArmazenamento)
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
        
    }

    async update(req: Request, res:Response){
        const { id } = req.params
        const { nome, endereco, responsavel } = req.body
        try{
            const local = await updateLocalArmazenamento.execute({id, nome, endereco, responsavel})
            res.status(200).json(local.message)
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    }

    async delete(req: Request, res:Response){
        const {id} = req.params
        try{
            const local = await deleteLocalArmazenamento.execute({id})
            res.status(200).json(local.message)

        }catch(err: any){
            res.status(400).json({ error: err.message });
        }
    }
}



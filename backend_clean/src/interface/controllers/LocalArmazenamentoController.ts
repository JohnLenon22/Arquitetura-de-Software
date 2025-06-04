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
            await createLocalArmazenamento.execute(nome, endereco, responsavel)
            res.status(201).json({message: `Local Armazenamento criado com sucesso`})
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    }

    async list(req: Request, res:Response){
        const LocalArmazenamentos = await getLocalArmazenamento.execute()
        res.json(LocalArmazenamentos)
    }

    async getById(req: Request, res:Response){
        const { id } = req.params
        const localArmazenamento = await getByIdLocalArmazenamento.execute(id)
        res.json(localArmazenamento)
    }

    async update(req: Request, res:Response){
        const { id } = req.params
        const { nome, endereco, responsavel } = req.body
        try{
            await updateLocalArmazenamento.execute(id, nome, endereco, responsavel)
            res.status(200).json({message: `Local Armazenamento atualizado com sucesso`})
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    }

    async delete(req: Request, res:Response){
        const {id} = req.params
        try{
            await deleteLocalArmazenamento.execute(id)
            res.status(200).json({message: `Local Armazenamento deletado com sucesso`})

        }catch(err: any){
            res.status(400).json({ error: err.message });
        }
    }
}



import { Request, Response } from "express";
import { GetPessoa } from "../../application/usecases/Pessoa/GetPessoa";
import { GetByIdPessoa } from "../../application/usecases/Pessoa/GetByIdPessoa";
import { CreatePessoa } from "../../application/usecases/Pessoa/CreatePessoa";
import { UpdatePessoa } from "../../application/usecases/Pessoa/UpdatePessoa";
import { DeletePessoa } from "../../application/usecases/Pessoa/DeletePessoa";

import { PessoaPrismaRepository } from "../../infraestructure/prisma/repositories/PessoaPrismaRepository";
const pessoaRepo = new PessoaPrismaRepository();

const createPessoa = new CreatePessoa(pessoaRepo);
const getPessoa = new GetPessoa(pessoaRepo);
const getByIdPessoa = new GetByIdPessoa(pessoaRepo);
const updatePessoa = new UpdatePessoa(pessoaRepo);
const deletePessoa = new DeletePessoa(pessoaRepo);

export class PessoaController{
    async create(req: Request, res:Response){
        const {nome, tipoPessoa} = req.body
        try{
            const pessoa = await createPessoa.execute({nome, tipoPessoa})
            res.status(201).json(pessoa.message)
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    }

    async list(req: Request, res:Response){
        try{
            const pessoas = await getPessoa.execute()
            res.json(pessoas)
        }catch(err: any){
            res.status(400).json({error: err.message})
        }    
    }

    async getById(req: Request, res:Response){
        const {id} = req.params
        try{
            const pessoa= await getByIdPessoa.execute({id})
            res.json(pessoa)
        }catch(err: any){
            res.status(400).json({error: err.message})
        } 
    }

    async update(req: Request, res:Response){
        const { id } = req.params
        const { nome, tipoPessoa } = req.body
        try{
            const pessoa = await updatePessoa.execute({id,  nome, tipoPessoa })
            res.status(200).json(pessoa.message)
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    }

    async delete(req: Request, res:Response){
        const {id} = req.params
        try{
            const pessoa = await deletePessoa.execute({id})
            res.status(200).json(pessoa.message)

        }catch(err: any){
            res.status(400).json({ error: err.message });
        }
    }
}



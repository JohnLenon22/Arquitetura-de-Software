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
            await createPessoa.execute(nome, tipoPessoa)
            res.status(201).json({message: `Pessoa criada com sucesso`})
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    }

    async list(req: Request, res:Response){
        const pessoas = await getPessoa.execute()
        res.json(pessoas)
    }

    async getById(req: Request, res:Response){
        const {id} = req.params
        const pessoa= await getByIdPessoa.execute(id)
        res.json(pessoa)
    }

    async update(req: Request, res:Response){
        const { id } = req.params
        const { idPessoa, idMovimentacao } = req.body
        try{
            await updatePessoa.execute(id,  idPessoa, idMovimentacao )
            res.status(200).json({message: `Pessoa atualizada com sucesso`})
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    }

    async delete(req: Request, res:Response){
        const {id} = req.params
        try{
            await deletePessoa.execute(id)
            res.status(200).json({message: `Pessoa deletada com sucesso`})

        }catch(err: any){
            res.status(400).json({ error: err.message });
        }
    }
}



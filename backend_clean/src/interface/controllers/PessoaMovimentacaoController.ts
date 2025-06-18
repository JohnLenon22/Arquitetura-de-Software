import { Request, Response } from "express";
import { GetPessoaMovimentacao } from "../../application/usecases/PessoaMovimentacao/GetPessoaMovimentacao";
import { GetByIdPessoaMovimentacao } from "../../application/usecases/PessoaMovimentacao/GetByIdPessoaMovimentacao";
import { CreatePessoaMovimentacao } from "../../application/usecases/PessoaMovimentacao/CreatePessoaMovimentacao";
import { UpdatePessoaMovimentacao } from "../../application/usecases/PessoaMovimentacao/UpdatePessoaMovimentacao";
import { DeletePessoaMovimentacao } from "../../application/usecases/PessoaMovimentacao/DeletePessoaMovimentacao";

import { PessoaMovimentacaoPrismaRepository } from "../../infraestructure/prisma/repositories/PessoaMovimentacaoPrismaRepository";
const pessoaMovimentacaoRepo = new PessoaMovimentacaoPrismaRepository();

const createPessoaMovimentacao = new CreatePessoaMovimentacao(pessoaMovimentacaoRepo);
const getPessoaMovimentacao = new GetPessoaMovimentacao(pessoaMovimentacaoRepo);
const getByIdPessoaMovimentacao = new GetByIdPessoaMovimentacao(pessoaMovimentacaoRepo);
const updatePessoaMovimentacao = new UpdatePessoaMovimentacao(pessoaMovimentacaoRepo);
const deletePessoaMovimentacao = new DeletePessoaMovimentacao(pessoaMovimentacaoRepo);

export class PessoaMovimentacaoController{
    async create(req: Request, res:Response){
        const {idPessoa, idMovimentacao} = req.body
        try{
            const pessoa = await createPessoaMovimentacao.execute({idPessoa, idMovimentacao})
            res.status(201).json(pessoa.message)
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    }

    async list(req: Request, res:Response){
        try{
            const pessoasMovimentacao = await getPessoaMovimentacao.execute()
            res.json(pessoasMovimentacao)
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    }

    async getById(req: Request, res:Response){
        const {id} = req.params
        try{
            const pessoaMovimentacao = await getByIdPessoaMovimentacao.execute({id})
            res.json(pessoaMovimentacao)
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    }

    async update(req: Request, res:Response){
        const { id } = req.params
        const { idPessoa, idMovimentacao } = req.body
        try{
            const pessoa = await updatePessoaMovimentacao.execute({id, idPessoa, idMovimentacao })
            res.status(200).json(pessoa.message)
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    }

    async delete(req: Request, res:Response){
        const {id} = req.params
        try{
            const pessoa = await deletePessoaMovimentacao.execute({id})
            res.status(200).json(pessoa.message)

        }catch(err: any){
            res.status(400).json({ error: err.message });
        }
    }
}



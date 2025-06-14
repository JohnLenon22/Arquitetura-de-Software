import { Request, Response } from "express";
import { GetMovimentacaoEstoque } from "../../application/usecases/MovimentacaoEstoque/GetMovimentacaoEstoque";
import { GetByIdMovimentacaoEstoque } from "../../application/usecases/MovimentacaoEstoque/GetByIdMovimentacaoEstoque";
import { CreateMovimentacaoEstoque } from "../../application/usecases/MovimentacaoEstoque/CreateMovimentacaoEstoque";
import { UpdateMovimentacaoEstoque } from "../../application/usecases/MovimentacaoEstoque/UpdateMovimentacaoEstoque";
import { DeleteMovimentacaoEstoque } from "../../application/usecases/MovimentacaoEstoque/DeleteMovimentacaoEstoque";

import { MovimentacaoEstoquePrismaRepository } from "../../infraestructure/prisma/repositories/MovimentacaoEstoquePrismaRepository";
const movimentacaoEstoqueRepo = new MovimentacaoEstoquePrismaRepository();

const createMovimentacaoEstoque = new CreateMovimentacaoEstoque(movimentacaoEstoqueRepo);
const getMovimentacaoEstoque = new GetMovimentacaoEstoque(movimentacaoEstoqueRepo);
const getByIdMovimentacaoEstoque = new GetByIdMovimentacaoEstoque(movimentacaoEstoqueRepo);
const updateMovimentacaoEstoque = new UpdateMovimentacaoEstoque(movimentacaoEstoqueRepo);
const deleteMovimentacaoEstoque = new DeleteMovimentacaoEstoque(movimentacaoEstoqueRepo);

export class MovimentacaoEstoqueController{
    async create(req: Request, res:Response){
        const {tipoMovimentacao , quantidade, data, idProduto, idUsuario, idUsuarioMovimentacao, idLocalArmazenamento} = req.body
        try{
            await createMovimentacaoEstoque.execute(tipoMovimentacao , quantidade, data, idProduto, idUsuario, idUsuarioMovimentacao, idLocalArmazenamento)
            res.status(201).json({message: `Movimentacao Estoque criada com sucesso`})
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    }

    async list(req: Request, res:Response){
        const movimentacoesEstoque = await getMovimentacaoEstoque.execute()
        res.json(movimentacoesEstoque)
    }

    async getById(req: Request, res:Response){
        const {id} = req.params
        const movimentacaoEstoque = await getByIdMovimentacaoEstoque.execute(id)
        res.json(movimentacaoEstoque)
    }

    async update(req: Request, res:Response){
        const { id } = req.params
        const { tipoMovimentacao , quantidade, data, idProduto, idUsuario, idUsuarioMovimentacao, idLocalArmazenamento } = req.body
        try{
            await updateMovimentacaoEstoque.execute(id,  tipoMovimentacao , quantidade, data, idProduto, idUsuario, idUsuarioMovimentacao, idLocalArmazenamento )
            res.status(200).json({message: `Movimentacao Estoque atualizada com sucesso`})
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    }

    async delete(req: Request, res:Response){
        const {id} = req.params
        try{
            await deleteMovimentacaoEstoque.execute(id)
            res.status(200).json({message: `Movimentacao Estoque deletada com sucesso`})

        }catch(err: any){
            res.status(400).json({ error: err.message });
        }
    }
}



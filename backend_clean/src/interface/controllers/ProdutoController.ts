import { Request, Response } from "express";
import { CreateProduto } from "../../application/usecases/Produto/CreateProduto";
import { GetProduto } from "../../application/usecases/Produto/GetProduto";
import { UpdateProduto } from "../../application/usecases/Produto/UpdateProduto";
import { DeleteProduto } from "../../application/usecases/Produto/DeleteProduto";
import { ProdutoPrismaRepository } from "../../infraestructure/prisma/repositories/ProdutoPrismaRepository";
const produtoRepo = new ProdutoPrismaRepository();

const createProduto = new CreateProduto(produtoRepo);
const getProduto = new GetProduto(produtoRepo);
const updateProduto = new UpdateProduto(produtoRepo);
const deleteProduto = new DeleteProduto(produtoRepo);

export class ProdutoController{
    async create(req: Request, res:Response){
        const {nome,preco,descricao,quantidadeEstoque,categoriaId} = req.body;
        try{
            await createProduto.execute(nome,preco,descricao,quantidadeEstoque,categoriaId)
            res.status(201).json({message: `Produto de nome "${nome}" criado com sucesso`})
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    }

    async list(req: Request, res:Response){
        const produtos = await getProduto.execute()
        res.json(produtos)
    }

    async update(req: Request, res:Response){
        const {id} = req.params
        const { nome, preco, descricao, quantidadeEstoque, categoriaId} = req.body
        try{
            await updateProduto.execute(id, nome, preco, descricao, quantidadeEstoque, categoriaId)
            res.status(200).json({message: `Produto atualizado com sucesso`})
        }catch(err: any){
            res.status(400).json({error: err.message})

        }
    }

    async delete(req: Request, res:Response){
        const {id} = req.params
        try{
            await deleteProduto.execute(id)
            res.status(200).json({message: `Produto deletado com sucesso`})

        }catch(err: any){
            res.status(400).json({ error: err.message });
        }
    }

}
import { Request, Response } from "express";
import { CreateProduto } from "../../application/usecases/Produto/CreateProduto";
import { GetProduto } from "../../application/usecases/Produto/GetProduto";
import { GetByIdProduto } from "../../application/usecases/Produto/GetByIdProduto";
import { UpdateProduto } from "../../application/usecases/Produto/UpdateProduto";
import { DeleteProduto } from "../../application/usecases/Produto/DeleteProduto";

import { ProdutoPrismaRepository } from "../../infraestructure/prisma/repositories/ProdutoPrismaRepository";
import { UpdateQuantidadeProduto } from "../../application/usecases/Produto/UpdateQuantidadeProduto";
const produtoRepo = new ProdutoPrismaRepository();

const createProduto = new CreateProduto(produtoRepo);
const getProduto = new GetProduto(produtoRepo);
const getByIdProduto = new GetByIdProduto(produtoRepo);
const updateProduto = new UpdateProduto(produtoRepo);
const updateQuantidadeProduto = new UpdateQuantidadeProduto(produtoRepo);
const deleteProduto = new DeleteProduto(produtoRepo);

export class ProdutoController{
    async create(req: Request, res:Response){
        const {nome,quantidade,dataCadastro,precoVenda,precoCompra,descricao,idCategoria} = req.body;
        try{
            const produto= await createProduto.execute({
                nome, 
                quantidade,
                dataCadastro,
                precoVenda,
                precoCompra,
                descricao,
                idCategoria
            })

            res.status(201).json(produto.message);
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    }

    async list(req: Request, res:Response){
        try{
            const produtos = await getProduto.execute()
            res.json(produtos)
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
        
    }

    async getById(req: Request, res:Response){
        const {id} = req.params
        try{
            const produto = await getByIdProduto.execute({id})
            res.json(produto)
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    }

    async update(req: Request, res:Response){
        const {id} = req.params
        const { nome,quantidade,dataCadastro,precoVenda,precoCompra,descricao,idCategoria} = req.body
        try{
            const produto = await updateProduto.execute({id, nome,quantidade,dataCadastro,precoVenda,precoCompra,descricao,idCategoria})
            res.status(200).json(produto.message)
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    }

    async updateQuantidade(req: Request, res:Response){
        const {id} = req.params
        const { quantidade, tipoMovimentacao} = req.body
        try{
            const produto = await updateQuantidadeProduto.execute({id, quantidade, tipoMovimentacao})
            res.status(200).json(produto.message)
            
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    }

    async delete(req: Request, res:Response){
        const {id} = req.params
        try{
            const produto = await deleteProduto.execute({id})
            res.status(200).json(produto.message)

        }catch(err: any){
            res.status(400).json({ error: err.message });
        }
    }

}
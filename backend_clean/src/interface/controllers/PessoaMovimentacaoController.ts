// import { Request, Response } from "express";
// import { CreatePessoaMovimentacao } from "../../application/usecases/PessoaMovimentacao/CreatePessoaMovimentacao";
// import { GetPessoaMovimentacao } from "../../application/usecases/PessoaMovimentacao/GetPessoaMovimentacao";
// import { UpdatePessoaMovimentacao } from "../../application/usecases/PessoaMovimentacao/UpdatePessoaMovimentacao";
// import { DeletePessoaMovimentacao } from "../../application/usecases/PessoaMovimentacao/DeletePessoaMovimentacao";
// import { GetByIdPessoaMovimentacao } from "../../application/usecases/PessoaMovimentacao/GetByIdPessoaMovimentacao";

// import { PessoaMovimentacaoPrismaRepository } from "../../infrastructure/repositories/pessoaMovimentacaoPrismaRepository";
// const pessoaMovimentacaoRep = new PessoaMovimentacaoPrismaRepository();

// const createPessoaMovimentacao = new CreatePessoaMovimentacao(pessoaMovimentacaoRep);
// const getPessoaMovimentacao = new GetPessoaMovimentacao(pessoaMovimentacaoRep);
// const getByIdPessoaMovimentacao = new GetByIdPessoaMovimentacao(pessoaMovimentacaoRep);
// const updatePessoaMovimentacao = new UpdatePessoaMovimentacao(pessoaMovimentacaoRep);
// const deletePessoaMovimentacao = new DeletePessoaMovimentacao(pessoaMovimentacaoRep);

// export class PessoaMovimentacaoController{
//     async create(req: Request, res:Response){
//         const {idPessoa, idMovimentacao} = req.body;
//         try{
//             await createPessoaMovimentacao.execute(idPessoa, idMovimentacao)
//             res.status(201).json({message: `PessoaMovimentacao criado com sucesso`})
//         }catch(err: any){
//             res.status(400).json({error: err.message})
//         }
//     }

//     async list(req: Request, res:Response){
//         const pessoaMovimentacoes = await getPessoaMovimentacao.execute()
//         res.json(pessoaMovimentacoes)
//     }

//     async getById(req: Request, res:Response){
//         const {id} = req.params
//         const pessoaMovimentacao = await getByIdPessoaMovimentacao.execute(id)
//         res.json(pessoaMovimentacao)
//     }

//     async update(req: Request, res:Response){
//         const {id} = req.params
//         const {idPessoa, idMovimentacao} = req.body
//         try{
//             await updatePessoaMovimentacao.execute(id, idPessoa, idMovimentacao)
//             res.status(200).json({message: `PessoaMovimentacao atualizado com sucesso`})
//         }catch(err: any){
//             res.status(400).json({error: err.message})

//         }
//     }

//     async delete(req: Request, res:Response){
//         const {id} = req.params
//         try{
//             await deletePessoaMovimentacao.execute(id)
//             res.status(200).json({message: `PessoaMovimentacao deletado com sucesso`})

//         }catch(err: any){
//             res.status(400).json({ error: err.message });
//         }
//     }

// }
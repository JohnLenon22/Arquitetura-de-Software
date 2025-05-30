import { PessoaMovimentacao } from '../../../domain/entities/PessoaMovimentacao';
import {IPessoaMovimentacaoRepository} from '../../../domain/repositories/IPessoaMovimentacaoRepository';
import {prisma} from "../client";

export class PessoaMovimentacaoPrismaRepository implements IPessoaMovimentacaoRepository {

    async create(pessoaMovimentacao: PessoaMovimentacao): Promise<void>{
            await prisma.pessoaMovimentacao.create({
                data: {
                    id: crypto.randomUUID(),
                    idPessoa: pessoaMovimentacao.idPessoa,
                    idMovimentacao: pessoaMovimentacao.idMovimentacao
                }
            });
    }
    
    async findAll(): Promise<PessoaMovimentacao[]>{
        const pessoaMovimentacoes = await prisma.pessoaMovimentacao.findMany();
        return pessoaMovimentacoes.map((p: { id: string; idPessoa: string; idMovimentacao: string}) => new PessoaMovimentacao(
            p.id, 
            p.idPessoa, 
            p.idMovimentacao
        ));

    }

    async findById(id: string): Promise<PessoaMovimentacao | null>{
        const pessoaMovimentacao = await prisma.pessoaMovimentacao.findUnique({where:{id}});
        return pessoaMovimentacao ? new PessoaMovimentacao(
            pessoaMovimentacao.id, 
            pessoaMovimentacao.idPessoa, 
            pessoaMovimentacao.idMovimentacao
        ):null;
    }

    async update(id:string, pessoaMovimentacao: PessoaMovimentacao): Promise<void>{
        await prisma.pessoaMovimentacao.update({
            where: {id},
            data: {
                idPessoa: pessoaMovimentacao.idPessoa,
                idMovimentacao: pessoaMovimentacao.idMovimentacao
            }
        });
    }

    async delete(id:string): Promise<void>{
        await prisma.pessoaMovimentacao.delete({where:{id}})
    }
}

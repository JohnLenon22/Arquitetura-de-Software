import { TipoPessoa } from "@prisma/client";
import { IPessoaRepository } from "../../../domain/repositories/IPessoaRepository";
import { ListPessoaInputDto, ListPessoaOutputDto } from "../../dto/Pessoa/ListPessoaDto";
import { UseCase } from "../UseCase";
export class GetPessoa implements UseCase<ListPessoaInputDto, ListPessoaOutputDto> {
    constructor(private pessoaRep: IPessoaRepository){}

    async execute(): Promise<ListPessoaOutputDto>{
        const pessoas = await this.pessoaRep.findAll();
        const OutputDTO: ListPessoaOutputDto = pessoas.map( pessoa => ({
            id: pessoa.id,
            nome: pessoa.nome,
            tipoPessoa: pessoa.tipoPessoa
        }))
        return OutputDTO;

    }

}
import { IPessoaRepository } from "../../../domain/repositories/IPessoaRepository";
import { GetByIdPessoaInputDto, GetByIdPessoaOutputDto } from "../../dto/Pessoa/GetByIdPessoaDto";
import { UseCase } from "../UseCase";

export class GetByIdPessoa implements UseCase<GetByIdPessoaInputDto, GetByIdPessoaOutputDto>{
    constructor(private pessoaRep: IPessoaRepository){}

    async execute(InputDTO: GetByIdPessoaInputDto): Promise<GetByIdPessoaOutputDto>{
        const pessoa = await this.pessoaRep.findById(InputDTO.id);
        if(pessoa){
            const OutputDTO: GetByIdPessoaOutputDto = {
                nome: pessoa.nome,
                tipoPessoa: pessoa.tipoPessoa,
            }
            return OutputDTO;
        }else{
            throw new Error("Pessoa não encontrada");
        }
        
        
    }

}
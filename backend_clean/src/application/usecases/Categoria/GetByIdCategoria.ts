import { ICategoriaRepository } from "../../../domain/repositories/ICategoriaRepository";
import { UseCase } from "../UseCase";
import { GetByIdCategoriaInputDto, GetByIdCategoriaOutputDto } from "../../dto/Categoria/GetByIdCategoriaDto";
export class GetByIdCategoria implements UseCase<GetByIdCategoriaInputDto, GetByIdCategoriaOutputDto>{
    constructor(private categoriaRep: ICategoriaRepository){}

    async execute(InputDTO: GetByIdCategoriaInputDto): Promise<GetByIdCategoriaOutputDto>{
        try{
            await this.categoriaRep.findById(InputDTO.id);
            const OutputDTO: GetByIdCategoriaOutputDto = {message: "Categoria deletada com sucesso"}
            return OutputDTO
        }catch{
            return {message: "Erro ao deletar categoria"};
        }
        

    }
}
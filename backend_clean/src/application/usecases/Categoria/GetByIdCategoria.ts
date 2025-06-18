import { ICategoriaRepository } from "../../../domain/repositories/ICategoriaRepository";
import { UseCase } from "../UseCase";
import { GetByIdCategoriaInputDto, GetByIdCategoriaOutputDto } from "../../dto/Categoria/GetByIdCategoriaDto";
export class GetByIdCategoria implements UseCase<GetByIdCategoriaInputDto, GetByIdCategoriaOutputDto>{
    constructor(private categoriaRep: ICategoriaRepository){}

    async execute(InputDTO: GetByIdCategoriaInputDto): Promise<GetByIdCategoriaOutputDto>{
        const categoria = await this.categoriaRep.findById(InputDTO.id);
        if(categoria){
            const OutputDTO: GetByIdCategoriaOutputDto = {nome: categoria.nome};
            return OutputDTO
        }else{
            throw new Error("Categoria não encontrada");
        }
        


    }
}
import { ICategoriaRepository } from "../../../domain/repositories/ICategoriaRepository";
import { UpdateCategoriaInputDto } from "../../dto/Categoria/UpdateCategoriaDto";
import { UpdateCategoriaOutputDto } from "../../dto/Categoria/UpdateCategoriaDto";
import { Categoria } from "../../../domain/entities/Categoria";
import { UseCase } from "../UseCase";
export class UpdateCategoria implements UseCase<UpdateCategoriaInputDto, UpdateCategoriaOutputDto>{
    constructor(private categoriaRep: ICategoriaRepository){}
    
    async execute(InputDTO: UpdateCategoriaInputDto): Promise<UpdateCategoriaOutputDto>{
        const categoria = new Categoria(InputDTO.nome)
        await this.categoriaRep.update(InputDTO.id, categoria);

        const OutputDTO: UpdateCategoriaOutputDto = {message: `Categoria atualizada com sucesso\nID: ${categoria.nome}`};
        return OutputDTO;
    }
        
}
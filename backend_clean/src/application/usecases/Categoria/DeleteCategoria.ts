import { ICategoriaRepository } from "../../../domain/repositories/ICategoriaRepository";
import { UseCase } from "../UseCase";
import { DeleteCategoriaInputDTO } from "../../dto/Categoria/DeleteCategoriaDto";
import { DeleteCategoriaOutputDTO } from "../../dto/Categoria/DeleteCategoriaDto";
export class DeleteCategoria implements UseCase<DeleteCategoriaInputDTO, DeleteCategoriaOutputDTO>{
    constructor(private categoriaRep: ICategoriaRepository){}

    async execute(InputDTO: DeleteCategoriaInputDTO): Promise<DeleteCategoriaOutputDTO>{
        try{
            await this.categoriaRep.delete(InputDTO.id);
            const OutputDTO: DeleteCategoriaOutputDTO = {message: "Categoria deletada com sucesso"};
            return OutputDTO
        }catch{
            return { message: "Erro ao deletar categoria" };
        }
        
    }
}

import { ICategoriaRepository } from "../../../domain/repositories/ICategoriaRepository";
import { Categoria } from "../../../domain/entities/Categoria";
import { UseCase } from "../UseCase";
import { CreateCategoriaInputDto } from "../../dto/Categoria/CreateCategoriaDto";
import { CreateCategoriaOutputDto } from "../../dto/Categoria/CreateCategoriaDto";

export class CreateCategoria implements UseCase<CreateCategoriaInputDto, CreateCategoriaOutputDto>{
    constructor(private categoriaRep: ICategoriaRepository){}

    async execute(InputDTO: CreateCategoriaInputDto): Promise<CreateCategoriaOutputDto>{
        const categoria = new Categoria(
            String(InputDTO)
        )
        await this.categoriaRep.create(categoria);

        const OutputDTO: CreateCategoriaOutputDto = {message: `Categoria criada com sucesso`};
        return OutputDTO
    }
}

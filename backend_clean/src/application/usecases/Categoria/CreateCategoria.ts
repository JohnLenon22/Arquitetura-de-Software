import { ICategoriaRepository } from "../../../domain/repositories/ICategoriaRepository";
import { Categoria } from "../../../domain/entities/Categoria";
import { UseCase } from "../UseCase";
import { CreateCategoriaInputDto } from "../../dto/Categoria/CreateCategoriaInputDto";
import { CreateCategoriaOutputDto } from "../../dto/Categoria/CreateCategoriaOutputDto";

export class CreateCategoria implements UseCase<CreateCategoriaInputDto, CreateCategoriaOutputDto>{
    constructor(private categoriaRep: ICategoriaRepository){}

    async execute(InputDTO: CreateCategoriaInputDto): Promise<CreateCategoriaOutputDto>{
        const categoria = new Categoria(
            String(InputDTO)
        )
        await this.categoriaRep.create(categoria);

        const OutputDTO: CreateCategoriaOutputDto = {id: categoria.id!}

        return OutputDTO
    }
}

import { ICategoriaRepository } from "../../../domain/repositories/ICategoriaRepository";
import { UseCase } from "../UseCase";
import { ListCategoriaInputDTO, ListCategoriaOutputDTO } from "../../dto/Categoria/ListCategoriaDto";
export class GetCategoria implements UseCase<ListCategoriaInputDTO, ListCategoriaOutputDTO>{
    constructor(private categoriaRep: ICategoriaRepository){}

        async execute(InputDTO: ListCategoriaInputDTO): Promise<ListCategoriaOutputDTO>{
            const categorias = await this.categoriaRep.findAll();

            const OutputDTO: ListCategoriaOutputDTO = categorias.map(categoria => ({
                id: categoria.id!,
                nome: categoria.nome,
            }));
            return OutputDTO;
        }
}
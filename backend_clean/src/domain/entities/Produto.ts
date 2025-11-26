import { notEqual } from "assert";
import { isDate } from "util/types";

export class Produto {
    constructor(
        public readonly id: string,
        public nome: string,
        public quantidade: number,
        public dataCadastro: Date | string = new Date(),
        public precoVenda: number,
        public precoCompra: number,
        public descricao: string,
        public idCategoria: number

    ){

        if (precoCompra <= 0 || precoVenda <= 0){
            throw new Error("Preço de compra e preço de venda devem ser maiores que zero");
        } 
        if (precoVenda<precoCompra){
            throw new Error("O preço de venda do produto deve ser maior que o preço de compra");
        }
        if (quantidade <= 0){
            throw new Error("A quantidade do produto deve ser maior ou igual a zero");
        }
        if (!nome || nome.trim() === "" ) {
            throw new Error("O nome do produto não pode ser vazio");
        }

        if (new Date(dataCadastro) > new Date()) {
            throw new Error("A data de cadastro não pode ser uma data futura");
        }

        if (isNaN(new Date(dataCadastro).getTime())) {
            throw new Error("A data de cadastro é inválida");
        }
    }
}   
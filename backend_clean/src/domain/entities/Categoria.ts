export class Categoria {
    constructor(
        public nome: string,
        public id?: number,
    ) {
        console.log("Valor recebido em nome:", JSON.stringify(nome));
        if(!nome) {
            throw new Error("O nome da categoria não pode ser vazio");
        }
        if (/[^a-zA-Z0-9À-ÖØ-öø-ÿ\u00C0-\u017F\s\-]/.test(nome)) {
            throw new Error("O nome da categoria não pode conter caracteres especiais");
        }
    }
}



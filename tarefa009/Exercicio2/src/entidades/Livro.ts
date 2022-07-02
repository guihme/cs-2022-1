import { Produto } from "./Produto";

export class Livro extends Produto{
    autor: string;

    constructor(nome: string, preco: number, descricao: string, autor: string){
        super(nome, preco, descricao);
        this.autor = autor;
    }

    public get descricao(): string {
        return `${super.descricao}, autor ${this.autor}`
     }
}
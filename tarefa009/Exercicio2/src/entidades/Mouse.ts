import { Produto } from "./Produto";

export class Mouse extends Produto{
    tipo: string;

    constructor(nome: string, preco: number, descricao: string, tipo: string){
        super(nome, preco, descricao);
        this.tipo = tipo;
    }

    public get descricao(): string {
       return `${super.descricao}, tipo ${this.tipo}`
    }
}
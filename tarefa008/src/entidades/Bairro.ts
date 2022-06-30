import { Cidade } from "./Cidade";
import { Endereco } from "./Endereco";

export class Bairro {
    private _nome: string;
    cidade: Cidade;
    enderecos: Endereco[] = [];

    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }
}
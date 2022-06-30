import { Bairro } from "./Bairro";
import { Estado } from "./Estado";

export class Cidade {
    private _nome: string;

    estado: Estado;
    bairros: Bairro[] = [];

    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }
}
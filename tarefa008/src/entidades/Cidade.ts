import { Bairro } from "./Bairro";
import { Estado } from "./Estado";

/**
 * Classe que representa uma cidade
 * @class Cidade
 * @author Guilherme Cruz
 * @data 15/07/2022
 */
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
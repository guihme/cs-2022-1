import { Cidade } from "./Cidade";
import { Endereco } from "./Endereco";


/**
 * Classe que representa um Bairro
 * @class Bairro
 * @author Guilherme Cruz
 * @data 15/07/2022
 */
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
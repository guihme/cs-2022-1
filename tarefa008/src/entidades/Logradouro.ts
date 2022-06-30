import { Endereco } from "./Endereco";
import { TipoLogradouro } from "./TipoLogradouro";

export class Logradouro{

    private _nome: string;
    private _tipoLogadouro: TipoLogradouro;
    endereco: Endereco[] = [];

    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }

    public get tipoLogadouro(): TipoLogradouro {
        return this._tipoLogadouro;
    }
    public set tipoLogadouro(value: TipoLogradouro) {
        this._tipoLogadouro = value;
    }

}
import { Endereco } from "./Endereco";

export class PessoaFisica {
    private _nome: string;

    private _sexo: string;

    private _dataNascimento: Date;

    enderecos: Endereco[];

    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }
    public get sexo(): string {
        return this._sexo;
    }
    public set sexo(value: string) {
        this._sexo = value;
    }
    public get dataNascimento(): Date {
        return this._dataNascimento;
    }
    public set dataNascimento(value: Date) {
        this._dataNascimento = value;
    }
}
import { Bairro } from "./Bairro";
import { Logradouro } from "./Logradouro";
import { PessoaFisica } from "./PessoaFisica";
import { TipoEndereco } from "./TipoEndereco";


/**
 * Classe que representa um Endereço
 * @class Endereço
 * @author Guilherme Cruz
 * @data 15/07/2022
 */
export class Endereco {
    private _numero: number;
    private _complemento: string;
    private _cep: number;
    logradouro: Logradouro;
    bairro: Bairro;
    tipoEndereço: TipoEndereco;
    pessoaFisica: PessoaFisica[] = [];

    public get cep(): number {
        return this._cep;
    }
    public set cep(value: number) {
        this._cep = value;
    }

    public get numero(): number {
        return this._numero;
    }
    public set numero(value: number) {
        this._numero = value;
    }

    public get complemento(): string {
        return this._complemento;
    }
    public set complemento(value: string) {
        this._complemento = value;
    }

}
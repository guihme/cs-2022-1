import { Cidade } from "./Cidade";
import { Pais } from "./Pais";

/**
 * Classe que representa um Estado
 * @class Estado
 * @author Guilherme Cruz
 * @data 15/07/2022
 */
export class Estado {
    private _sigla: string;

    nome: string;
    pais: Pais
    cidades: Cidade[] = [];

    public get sigla(): string {
        return this._sigla;
    }
    public set sigla(value: string) {
        this._sigla = value;
    }
}
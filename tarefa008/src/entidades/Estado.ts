import { Cidade } from "./Cidade";
import { Pais } from "./Pais";

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
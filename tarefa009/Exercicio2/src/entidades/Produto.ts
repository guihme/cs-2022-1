export abstract class Produto {
    private _nomeLoja: string;
    private _preco: number;
    private _descricao: string;

    constructor(nome: string, preco: number, descricao: string){
        this._nomeLoja = nome;
        this._preco = preco;
        this._descricao = descricao;
    }

    public get descricao(): string {
        return this._descricao;
    }
    
    public get preco(): number {
        return this._preco;
    }
    public set preco(value: number) {
        this._preco = value;
    }

    public get nomeLoja(): string {
        return this._nomeLoja;
    }
    public set nomeLoja(value: string) {
        this._nomeLoja = value;
    }

}
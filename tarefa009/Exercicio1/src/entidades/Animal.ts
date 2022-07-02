export abstract class Animal {
    private _nome: string;
    private _idade: number;

    constructor(nome: string, idade: number) {
        this._nome = nome;
        this._idade = idade;
    }

    emitirSom(){
        console.log(`${this.nome} emitiu um som`);
    };

    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }

    public get idade(): number {
        return this._idade;
    }
    public set idade(value: number) {
        this._idade = value;
    }
}
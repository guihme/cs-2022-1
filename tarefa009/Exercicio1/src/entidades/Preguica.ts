import { Animal } from "./Animal";

export class Preguica extends Animal{

    emitirSom(){
        console.log("uaaa!");
    };
    subir(){
        console.log(`${this.nome} correu!`);
    };
}
import { Animal } from "./Animal";

export class Cavalo extends Animal{

    emitirSom(){
        console.log("iiirrrrí!");
    };
    correr(){
        console.log(`${this.nome} correu!`);
    };
}
import { Animal } from "./Animal";

export class Cavalo extends Animal{

    emitirSom(){
        console.log("iiirrrrĂ­!");
    };
    correr(){
        console.log(`${this.nome} correu!`);
    };
}
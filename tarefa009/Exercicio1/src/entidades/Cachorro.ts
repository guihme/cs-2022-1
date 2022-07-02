import { Animal } from "./Animal";

export class Cachorro extends Animal{

    emitirSom(){
        console.log("auau!");
    };
    correr(){
        console.log(`${this.nome} correu!`);
    };
}
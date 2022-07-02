import { Animal } from "./Animal";

export class Veterinario {
    examinar(animal: Animal){
        animal.emitirSom();
    }
}
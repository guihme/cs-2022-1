import { Animal } from "./Animal";
import { Cachorro } from "./Cachorro";
import { Cavalo } from "./Cavalo";
import { Preguica } from "./Preguica";

export class Zoologico {
    jaula: Animal[] = [];

    pushJaula(animais: Animal[]) {
        this.jaula.push(...animais);
    }

    percorrerJaula() {
        this.jaula.forEach(animal => {
            animal.emitirSom();
            if(animal instanceof Cavalo || animal instanceof Cachorro){
                animal.correr();
            }
        });
    }
}
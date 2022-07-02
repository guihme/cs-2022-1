import { Animal } from "./Animal";
import { Cachorro } from "./Cachorro";
import { Cavalo } from "./Cavalo";
import { Preguica } from "./Preguica";

export class AnimalTest {
    cavalo: Cavalo;
    cachorro: Cachorro;
    preguiça: Preguica;

    criarAnimais() {
        this.cavalo = new Cavalo("cavalo", 10);
        this.cachorro = new Cachorro("cachorro", 5);
        this.preguiça = new Preguica("preguiça", 8);
    }

    emitirSom(animal: Animal) {
        animal.emitirSom();
    }

}
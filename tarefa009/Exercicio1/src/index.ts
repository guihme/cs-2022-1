import { AnimalTest } from "./entidades/AnimalTeste";
import { Veterinario } from "./entidades/Veterinario";
import { Zoologico } from "./entidades/Zoologico";

function main() {
    console.log("-----Animal Teste-----");
    console.log("");

    const animalTest = new AnimalTest();
    animalTest.criarAnimais();

    animalTest.emitirSom(animalTest.cavalo);
    animalTest.emitirSom(animalTest.cachorro);
    animalTest.emitirSom(animalTest.preguiça);

    console.log("");
    console.log("-----Veterinario-----");
    console.log("");
    
    const veterinario: Veterinario = new Veterinario;

    veterinario.examinar(animalTest.cavalo);
    veterinario.examinar(animalTest.cachorro);
    veterinario.examinar(animalTest.preguiça);

    console.log("");
    console.log("-----Zoologico-----");
    console.log("");

    const zoologico = new Zoologico();

    zoologico.pushJaula([animalTest.cachorro,animalTest.cachorro,animalTest.cachorro,animalTest.cachorro,animalTest.cavalo,animalTest.cavalo,animalTest.cavalo,animalTest.preguiça,animalTest.preguiça,animalTest.preguiça,]);
    zoologico.percorrerJaula();
}

main();
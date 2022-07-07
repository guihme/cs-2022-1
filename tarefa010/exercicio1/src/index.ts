import { mergeSortRecursion } from "./functions/mergeSortRecursion";
import { mergeSort } from "./functions/mergeSort";

function main() {

    console.log("ordenação com 100");
    
    var array = Array.from({length: 100}, () => Math.floor(Math.random() * 1000));

    console.log("---Recursivo---");

    var start = new Date().getTime();
    var result = mergeSortRecursion(array);
    var finish = new Date().getTime();

    console.log(result);
    console.log("finalizou em: ", finish - start);

    console.log("---iterativo---");
    
    var start = new Date().getTime();
    result = mergeSort(array);
    var finish = new Date().getTime();

    console.log(result);
    console.log("finalizou em: ", finish - start);

    console.log("ordenação com 1000");
    
    var array = Array.from({length: 1000}, () => Math.floor(Math.random() * 1000));

    console.log("---Recursivo---");
    
    var start = new Date().getTime();
    var result = mergeSortRecursion(array);
    var finish = new Date().getTime();

    console.log(result);
    console.log("finalizou em: ", finish - start);

    console.log("---iterativo---");
    
    var start = new Date().getTime();
    result = mergeSort(array);
    var finish = new Date().getTime();

    console.log(result);
    console.log("finalizou em: ", finish - start);

    console.log("ordenação com 10000");
    
    var array = Array.from({length: 10000}, () => Math.floor(Math.random() * 1000));

    console.log("---Recursivo---");
    
    var start = new Date().getTime();
    var result = mergeSortRecursion(array);
    var finish = new Date().getTime();

    console.log(result);
    console.log("finalizou em: ", finish - start);

    console.log("---iterativo---");
    
    var start = new Date().getTime();
    result = mergeSort(array);
    var finish = new Date().getTime();

    console.log(result);
    console.log("finalizou em: ", finish - start);
    
}

main();
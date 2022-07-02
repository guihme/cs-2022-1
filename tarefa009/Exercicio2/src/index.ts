import { Livro } from "./entidades/Livro";
import { Mouse } from "./entidades/Mouse";
import { ProdutoTeste } from "./entidades/ProdutoTeste";

function main() {
    console.log("-----Produto Teste-----");
    console.log("");

    const produtoTeste: ProdutoTeste = new ProdutoTeste();

    produtoTeste.pushCarrinho([
        new Mouse("logi", 100, "Mouse ótico, wireless. 10k dpi", "gamer"),
        new Livro("um livro", 25, "Livro capa dura", "Monteiro Lobato"),
        new Mouse("razer", 90, "Mouse usb 5k dpi", "escritorio"),
        new Livro("book", 15, "digital book", "Lock"),
        new Mouse("asus", 150, "Mouse asus special edition", "gamer"),
        new Livro("a evolução", 50, "livro de ciencia", "Darwin"),
    ]);

    produtoTeste.obterDesricao();
}

main();
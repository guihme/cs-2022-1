import { Produto } from "./Produto";

export class ProdutoTeste {
    carrinho: Produto[] = [];

    pushCarrinho(produtos: Produto[]){
        this.carrinho.push(...produtos);
    }

    obterDesricao(){
        this.carrinho.forEach(produto => {
            console.log(produto.descricao);
        });
    }
}
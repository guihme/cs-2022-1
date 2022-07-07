import { Contato } from "./Contato";

export class Agenda {
    contatos: Contato[] = [];


    addContato(contato: Contato){
        this.contatos.push(contato);
    };

    findContato(parametro: string): Contato|undefined {

        return this.contatos.find(contato => contato.email = parametro) || this.contatos.find(contato => contato.nome = parametro);
    }

    deleteContato(nome: string) {
       var contato = this.findContato(nome);
       if(!contato){
        return "Contatct does not exist";
        
       }
       var index = this.contatos.indexOf(contato!);
       this.contatos.splice(index,1);
    };

    list(){
        console.log(this.contatos);
        
    }

}
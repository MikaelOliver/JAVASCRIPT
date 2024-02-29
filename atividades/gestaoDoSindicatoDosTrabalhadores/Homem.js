import { Cadastro } from "./Cadastros.js";

export class Homem extends Cadastro {
    constructor(nome, dataDeNascimento, cpf, endereco, contato, ){
        super(nome, dataDeNascimento, cpf, endereco)
        this.contato = contato
    }

    get getContato(){
        return this.contato
    }

    set setContato(novoContato){
        this.contato = novoContato
    }

    aposentarHomem(){
        let anoAtual = new Date().getFullYear()
        let anoNascimento = this.dataDeNascimento.split('-')[0]
        if(anoAtual - anoNascimento >= 60){
            console.log('Você tem os requisitos para se aposentar')
        }else{
            console.log('Você não tem os requisitos para se aposentar')
        }
    }
}
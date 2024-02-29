import { Veiculos } from "./Veiculos.js";

export class Novos extends Veiculos{
    constructor(marca, modelo, placa, cor, anoDeFabricacao, tipoDeCombustivel, quantidade, preco, localizacao){
        super(marca, modelo, placa, cor, anoDeFabricacao, tipoDeCombustivel, quantidade)
        this._preco = preco
        this.localizacao = localizacao
        this.emplacado = false
        this.taixaDeEmplacamento =  0
        this.statusDeVenda = false
    }

    get preco(){
        return this._preco
    }
    get getLocalizacao(){
        return this.localizacao
    }
    get getEmplacado(){
        return this.emplacado
    }

    get getTaixaDeEmplacamento(){
        return this.taixaDeEmplacamento
    }

    get getStatusDeVenda(){
        return this.statusDeVenda
    }

    set preco(novoPreco){
        this._preco = novoPreco
    }

    set setLocalizacao(novaLocalizacao){
        this.localizacao = novaLocalizacao
    }
    
    set setEmplacamento(novoStatus){
        this.emplacado = novoStatus
    }

    set setTaixaDeEmplacamento(novaTaixaDeEmplacamento){
        this.taixaDeEmplacamento = novaTaixaDeEmplacamento
    }

    set setStatusDeVenda(novoStatusDeVenda){
        this.statusDeVenda = novoStatusDeVenda
    }
}
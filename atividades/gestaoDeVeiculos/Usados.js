// tempo de uso, numero de donos, kilometros rodados, preço, tem modificações??
import {Veiculos} from "./Veiculos.js"
export class Usado extends Veiculos{
    constructor(marca,modelo,placa,cor,anoDeFabricacao,tipoDeCombustivel,quantidade, numeroDeDonos, kilometrosRodados, preco){
        super(marca,modelo,placa,cor,anoDeFabricacao,tipoDeCombustivel,quantidade)
        this.numeroDeDonos = numeroDeDonos 
        this.kilometrosRodados = kilometrosRodados
        this._preco = preco
        this.modificado = false
    }

    get getNumeroDeDonos(){
        return this.numeroDeDonos
    }

    get getKilometrosRodados(){
        return this.kilometrosRodados
    }

    get preco(){
        return this._preco
    }

    get getModificado(){
        return this.modificado
    }

    set setNumeroDeDonos(novoNumeroDeDonos){
        this.numeroDeDonos = novoNumeroDeDonos
    }

    set setKilometrosRodados(novoKilometrorodado){
        this.kilometrosRodados = novoKilometrorodado
    }

    set preco(novoPreco){
        this._preco = novoPreco
    }

    set setModificado(novaModificacao){
        this.modificado = novaModificacao
    }

}

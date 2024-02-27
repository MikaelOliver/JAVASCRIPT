export class Conversor{
    constructor(valorEntrada,valorSaida,){
        this.valorEntrada = valorEntrada
        this.valorSaida = valorSaida
        // this.valorRecebido = valorRecebido
    }

    get PegarvalorEntrada(){
        return this.valorEntrada
    }

    get PegarvalorSaida(){
        return this.valorSaida
    }

    set mudarValorEntrada(novoValorEntrada){
        this.valorEntrada = novoValorEntrada
    }

    set mudarValorSaida(novoValorSaida){
        this.valorSaida = novoValorSaida
    }
}
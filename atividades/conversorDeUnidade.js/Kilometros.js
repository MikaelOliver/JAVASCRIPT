import { Conversor } from "./conversor.js"

export class Kilometros extends Conversor{
    constructor(valorEntrada,valorSaida,valorRecebido){
        super(valorEntrada,valorSaida)
        this.valorRecebido = valorRecebido
    }


    ConvertendoParaKilometros(){
       if(this.valorEntrada === 'KM' && this.valorSaida === 'M'){

        console.log (this.valorRecebido * 1000)

       }else if(this.valorEntrada === 'KM' && this.valorSaida === 'CM'){

        console.log (this.valorRecebido * 10000)

       }else if(this.valorEntrada === 'KM' && this.valorSaida === 'MM'){

        console.log (this.valorRecebido * 100000)
       }
    }
}
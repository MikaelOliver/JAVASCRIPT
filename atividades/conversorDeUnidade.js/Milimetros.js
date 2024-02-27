import { Conversor } from "./conversor.js"

export class Milimetros extends Conversor{
    constructor(valorEntrada,valorSaida,valorRecebido){
        super(valorEntrada,valorSaida)
        this.valorRecebido = valorRecebido
    }


    ConvertendoParaMilimetros(){
       if(this.valorEntrada === 'MM' && this.valorSaida === 'KM'){

        console.log (this.valorRecebido / 100000)

       }else if(this.valorEntrada === 'MM' && this.valorSaida === 'M'){

        console.log (this.valorRecebido / 1000)

       }else if(this.valorEntrada === 'MM' && this.valorSaida === 'CM'){

        console.log (this.valorRecebido / 100)
       }
    }
}
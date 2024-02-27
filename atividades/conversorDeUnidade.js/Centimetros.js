import { Conversor } from "./conversor.js"

export class Centimetros extends Conversor{
    constructor(valorEntrada,valorSaida,valorRecebido){
        super(valorEntrada,valorSaida)
        this.valorRecebido = valorRecebido
    }


    ConvertendoParaCentimetros(){
       if(this.valorEntrada === 'CM' && this.valorSaida === 'KM'){

        console.log (this.valorRecebido / 10000)

       }else if(this.valorEntrada === 'CM' && this.valorSaida === 'M'){

        console.log (this.valorRecebido / 100)

       }else if(this.valorEntrada === 'CM' && this.valorSaida === 'MM'){

        console.log (this.valorRecebido * 100)
       }
    }
}
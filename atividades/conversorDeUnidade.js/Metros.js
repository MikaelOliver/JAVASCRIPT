import { Conversor } from "./conversor.js"

export class Metros extends Conversor{
    constructor(valorEntrada,valorSaida,valorRecebido){
        super(valorEntrada,valorSaida)
        this.valorRecebido = valorRecebido
    }


    ConvertendoParaMetros(){
       if(this.valorEntrada === 'M' && this.valorSaida === 'KM'){

        console.log (this.valorRecebido / 1000)

       }else if(this.valorEntrada === 'M' && this.valorSaida === 'CM'){

        console.log (this.valorRecebido * 100)

       }else if(this.valorEntrada === 'M' && this.valorSaida === 'MM'){

        console.log (this.valorRecebido * 1000)
       }
    }
}
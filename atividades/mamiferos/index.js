// execuções/chamadas /
import { Cachorro } from "./Cachorro.js";
import { Gatos } from "./Gatos.js";

let fumaca = new Cachorro('Fumaça',undefined, 4)
let meow = new Gatos('Meow','Cianes', 4)

console.log(fumaca)
console.log('Olá sou o cãozinho ' + fumaca.obterNome)
console.log('Eu tenho ' + fumaca.obertPatas + ' patas')


function tipoMamifero(valor){
    if( valor === 'Miauuuu' ){
        console.log('Você é dono(a) de um(a) gato(a) ')
    }else if(valor === 'Auauuuu'){
        console.log('Você é dono(a) de um(a) cachorro(a) ')
    }else{
        console.log('Não foi possivel definir o tipo do seu PET')
    }
}

tipoMamifero(fumaca.late)
tipoMamifero(meow.mia)

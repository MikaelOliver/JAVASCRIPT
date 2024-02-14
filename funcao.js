function sum(a,b) {
    return a + b
    
}
console.log(sum(5,7))
console.log(sum(2,9))
console.log(sum(12,2))
console.log(sum(4,27))

function Bigger(age){
    if( age === 18){
        console.log('Você tem exatamente 18 anos')
    }else if( age > 18){
        console.log('Você tem mais de 18 anos!')
    }else if(age < 18){
        console.log('Você tem menor que 18 anos')
    }else{
        console.log('Impossivel analisar sua idade')
    }
}
const prompt = require('prompt-sync')()

let age = Number(prompt('Informe sua idade: '))

Bigger(age)


// function anonima - função dentro de uma variavel

const miFunction = function (){return 2+ 2}



//  função anonima - função dentro de um objeto

const miObject = {}
miObject.saudacao = function(){
    return 'Olá pessoal!'
}
console.log(miObject.saudacao())

// função anonima - função como argumento de uma função

function qualquerCoisa(funcao){
    funcao()
}

qualquerCoisa(function(){
    console.log('Executando uma função interna...')
})

function calcularImposto(funcao,valor){
    funcao(valor)
}

calcularImposto(
    function(valor){
        let imposto = valor * 0.05
        console.log(imposto)
    }, 2000
)

// Argumentos variaveis nas funções
function multiplicar(){
    let multiplicar = 1
    for(i in arguments){
        multiplicar *= arguments[i]
    }
    return{multiplicar, arguments}
}

console.log(multiplicar())
console.log(multiplicar(6))
console.log(multiplicar(6,5,6,5,3))
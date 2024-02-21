const prompt = require('prompt-sync')()

let idade = Number(prompt('Informe sua idade: '))

if(idade < 12 && idade >= 0 ){
    console.log(`Você é uma Criança`)
}else if(idade < 18 && idade >= 12){
    console.log(`Você é um Adolecente`)
}else if(idade >= 18 && idade < 60){
    console.log(`Você é um Adulto`)
}else if(idade >= 60 && idade < 150){
    console.log(`Você é um Idoso`)
}else{
    console.log(`Impossivel validar sua idade`)
}
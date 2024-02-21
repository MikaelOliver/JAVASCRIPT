// Faça um codigo que edentifique um Palíndromo.

const prompt = require('prompt-sync')()
palavra = prompt('Informe uma palavra para saber se é um Palindromo: ')
function validadorPalindromo() {
    
    const reverso = palavra.split('').reverse().join('')
    if(palavra === reverso) {
        console.log(`A palavra ${palavra} é um palíndromo!`)
    }else {
        console.log(`A palavra ${palavra} não é um palíndromo!`)
    }
}

validadorPalindromo()
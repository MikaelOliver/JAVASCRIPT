const prompt = require('prompt-sync')()


let numero = Number(prompt('Informe o seu numero: '))

for (let i = numero - 1; i >= 1; i--) {
    numero *= i;
}
console.log(numero)
console.log('====================')

// versão paulo
let numero1 = Number(prompt('Informe o seu numero: '))
let resultado = 1
for(let i = 1; i <= numero1; i++){
    resultado *= i
}
console.log(resultado)
//  crie um codigo que receba um valor e faça a conversão de acordo com a solicitação do usuario.


const prompt = require('prompt-sync')()

function conversor(){
    const valor = Number(prompt('Informe um valor numerico: '))
    if (!isNaN(valor)){
        const deValor = prompt('Informe de qual unidade inicial: [KM] Quilometro [M] Metros [CM] Centimetros [MM] Milimetros: ').toUpperCase()
        const paraValor = prompt('Informe para qual unidade quer tranformar: [KM] Quilometro [M] Metros [CM] Centimetros [MM] Milimetros: ').toUpperCase()
        if(deValor === paraValor){
            console.error('Os valores são iguais')
        }
        let metros
        switch (deValor) {
            case 'M':
                metros = valor
                console.log(`O resultado da conversão de ${deValor} para ${paraValor} é: ${metros}`)
                break;
            case 'KM':
                metros = valor * 1000
                console.log(`O resultado da conversão de ${deValor} para ${paraValor} é: ${metros}`)
                break;
            case 'CM':
                metros = valor / 100
                console.log(`O resultado da conversão de ${deValor} para ${paraValor} é: ${metros}`)
                break;
            case 'MM':
                metros = valor / 1000
                console.log(`O resultado da conversão de ${deValor} para ${paraValor} é: ${metros}`)
                break;
        }
        let resultado 
        switch (paraValor) {
            case 'M':
                resultado = metros
                break;
            case 'KM':
                resultado = metros / 1000
                break;
            case 'CM':
                resultado = metros * 100
                break;
        
            case 'MM':
                resultado = metros * 1000
                break;
        }
        console.log(`${valor}${deValor} equivale a ${resultado}${paraValor}`)
        
    }else{
        console.log(`${valor} não é um valor valido`)
    }
}

conversor()
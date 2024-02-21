// map é um metodo que tem uma função interna que intera com cada elemento de um array ou object.

const listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const tabuadaDoSeis = listaDeNumeros.map((item)=>{
    return item * 6
}) 
const tabuadaDoSete = listaDeNumeros.map((item)=>{
    return item * 7
}) 

// console.log(tabuadaDoSeis)
// console.log(tabuadaDoSete)

let minhaTabuada = [['Tabuada de SEIS:',...tabuadaDoSeis],['Tabuada de SETE:',...tabuadaDoSete]]

console.log(minhaTabuada)

const encontraNumero = listaDeNumeros.find((item)=>{
    return item === 7

})

console.log('Sai do find quando encontrei o: '+ encontraNumero)

const somaDosValores = listaDeNumeros.reduce((total,proxValor)=>{
    return total + proxValor
})

console.log(somaDosValores)
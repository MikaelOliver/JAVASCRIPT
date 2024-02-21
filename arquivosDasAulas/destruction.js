// destruction - é uma expressão que possibilita a extração de dados dinamicamente de arreys e/ou objetos em variaveis.

const pessoa = {
    nome : 'Elves',
    sobrenome : 'Soares',
    idade : 28,
}

console.log(pessoa.sobrenome)
// forma conversional de atribuição e impressão
const sobrenomeDoElvis = pessoa.sobrenome
console.log(sobrenomeDoElvis)
// forma descontruida

let { sobrenome } = pessoa

console.log(sobrenome)

let nomes = ['Alice', 'Francisco', 'Felipe', 'Mikael']
// forma conversional de ultilizar um array
console.log(nomes[1])
let nomeFrancisco = nomes[1]
console.log(nomeFrancisco)
// descontrução de arrays

let { 0:nomeAlice, 2:nomeFelipe } = nomes
console.log(nomeAlice)
console.log(nomeFelipe)

// spread - é uma sintaxe que permite espelhamento de objetos interaveis.


let meuArrey = [1, 2, 3, 4]
let novoArrey =[...meuArrey, 5, 6, 7, 8, 9]

console.table(novoArrey)

let meuObjeto = {
    nome : 'Paulo',
    idade: 29,
    profissao: 'Programador'
}

let novoObjeto = {
    ...meuObjeto,
    filhos: 4,
    animais : 2,
    casa : 'Nenhuma',
}
console.log(novoObjeto)

let maisNovoObjeto = {
    ...novoObjeto,
    natural : 'Fortaleza',
    nacionalidade : 'Americano',
    parentesco : 'Mexicano',
}

console.log(maisNovoObjeto)

const cadastroDePets = (info) =>{
    let novosDados = {
        ...info,
        tipoRacao: 'Canina',
        enfermidade : false,
        nivelDeSaude : 10

    }
    return novosDados
}

console.log(cadastroDePets({nome: 'Bob', idade: 7, raca: 'Pug'}))
//  rest - é uma sintaxe que permite representar um numero de arguementos indefinido em um arrey

const cadastrar = (usuarios, ...novosUsuarios) => {
    let totalDeUsuarios = [
        ...usuarios,
        ...novosUsuarios,
    ]
    console.log(totalDeUsuarios)
}

let usuarios = ['Neyva', 'Lara', 'Levi']

let novosUsuarios = cadastrar(usuarios, 'sedex', 'Gabriel', 'Kayro')
novosUsuarios = cadastrar(usuarios, 'sedex', 'Gabriel', 'Kayro', 'Jerferson', 'W.Junior', 'Anderson')


let numero = (...meusNumeros) => {
    console.log(meusNumeros.length)
}

let novosNumeros = numero(1,2,3,4,5,6,7,8)
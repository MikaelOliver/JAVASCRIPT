//ESTRUTURAS GLOBAIS: Object, String, Number, Array e a Functions

const animal = new Array('Gato', 'Cachorro', 'Rato')

console.log(animal)
console.log(animal.filter(function(animal){return animal === 'Rato'}))

const animais = {
    som : 'um som de animal',
    tipo: 'animal',
    emitirSom: function(){
        console.log(this.som)
    }
}

animais.emitirSom()

const gato = {
    som: 'Miauuu',
    tipo: 'gato',
}

Object.setPrototypeOf(gato,animais)

gato.emitirSom()

console.log(gato.tipo)


const cachorro = {
    som: 'Au Auu',
    tipo: 'cachorro'
}

Object.setPrototypeOf(cachorro,animais)

cachorro.emitirSom()

const gatoRaivoso = {
    tipo: 'gato raivoso',
    miarForte: function(){
        console.log(this.som.toUpperCase())
    }
}

Object.setPrototypeOf(gatoRaivoso, gato)
gatoRaivoso.miarForte()
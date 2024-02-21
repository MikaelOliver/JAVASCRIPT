function pessoa(nome, sobrenome) {
    nome = nome
    sobrenome = sobrenome
    console.log(`Meu nome é: ${nome} ${sobrenome}`)
}

pessoa('Mikael', 'Oliveira')


class People{
    constructor(){
        this.name = ''
        this.surname = ''
    }
    
    peopleName(fisrtname){
        this.name = fisrtname
        console.log(`Meu nome é: ${this.name}`)
    }

    peopleSurname(segundName){
        this.surname = segundName
        console.log(`Meu sobrenome é: ${this.surname}`)
    }

    completName(){
        let nameComplet = this.name + ' ' + this.surname
        console.log(`Meu nome completo é: ${nameComplet}`)
    }
}

let mikael = new People()
mikael.peopleName('Mikael')
mikael.peopleSurname('Oliveira')
mikael.completName()
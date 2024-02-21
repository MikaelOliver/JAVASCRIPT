class Animal{
    constructor(type){
        this.type = type
    }
    getType(){
        return this.type
    }
}

let meuPet = new Animal('Anfibio')
console.log(meuPet)
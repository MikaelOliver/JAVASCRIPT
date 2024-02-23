export class BixinhoVirtual{
    constructor(nome){
        this.nome = nome
        this.energia = 100
    }
    
    get obterNome(){
        return this.nome
    }
    
    brincar(){
        if(this.energia >= 10){
        console.log('Brincando!! ')
        return this.energia -= 50
        
        }else{
        console.log('Coloque o pet para dormir!')
    }
}

    dormir(){
        if(this.energia === 0){
            console.log('Dormindo!!')
            return this.energia += 50
        }
        return this.energia
    }
}
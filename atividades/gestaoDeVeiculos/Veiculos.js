export class Veiculos{
    constructor(marca,modelo, placa, cor, anoDeFabricacao, tipoDeCombustivel, quantidade){
        this.marca = marca
        this.modelo = modelo
        this.placa = placa
        this.cor = cor
        this.anoDeFabricacao = anoDeFabricacao
        this.tipoDeCombustivel = tipoDeCombustivel
        this.quantidade = quantidade
    }

    get getMarca(){
        return this.marca
    }
    
    get getModelo(){
        return this.modelo
    }
    
    get getplaca(){
        return this.placa
    }
    
    get getCor(){
        return this.cor
    }
    
    get getAnoDeFabricacao(){
        return this.anoDeFabricacao
    }
    
    get getTipoDeCombustivel() {
        return this.tipoDeCombustivel
    }
    get getQuantidade(){
        return this.quantidade
    }

    set setMarca(novaMarca){
        this.marca = novaMarca
    }
    set setModelo(novoModelo){
        this.modelo = novoModelo
    }
    set setPlaca(novaPlaca){
        this.placa = novaPlaca
    }
    set setCor(novaCor){
        this.cor = novaCor
    }
    set setAnoDeFabricacao(novoAnoDeFabricacao){
        this.anoDeFabricacao = novoAnoDeFabricacao
    }
    set setTipoDeCombustivel(novoTipoDeCombustivel){
        this.tipoDeCombustivel = novoTipoDeCombustivel
    }
    
    set setQuantidade(novaQuantidade){
        if(this.quantidade != 0){
            if(novaQuantidade > 0){
                this.quantidade += novaQuantidade
            }else{
                if(this.quantidade < Math.abs(novaQuantidade)){
                    console.log(`Você tem ${this.quantidade} impossivel retirar ${Math.abs(novaQuantidade)}`)
                }else{
                    this.quantidade += novaQuantidade
                }
            }
        }else{
            if(novaQuantidade > 0){
                this.quantidade += novaQuantidade
            }else{
                console.log(`Você tem ${this.quantidade} impossivel retirar ${Math.abs(novaQuantidade)}`)

            }
        }
    }

    
} 
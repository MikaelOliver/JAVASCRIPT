const bebidas = {
    nome: 'sabor do refri',
    marca: 'Marcar do refri',
    preco: 0,
    dataDeValidade: 'data',
    quantidade: 0,
    setQuantidade: function(novaQuantidade){
        if(this.quantidade != 0){
            if(novaQuantidade > 0){
                this.quantidade += novaQuantidade
                return true
            }else{
                if(this.quantidade < Math.abs(novaQuantidade)){
                    console.log(`Você tem ${this.quantidade} impossivel retirar ${Math.abs(novaQuantidade)}`)
                    return false
                }else{
                    this.quantidade += novaQuantidade
                    return true
                }
            }
        }else{
            if(novaQuantidade > 0){
                this.quantidade += novaQuantidade
                return true
            }else{
                console.log(`Você tem ${this.quantidade} impossivel retirar ${Math.abs(novaQuantidade)}`)
                return false

            }
        }
    },
    setValidardorDeValidade: function(){
        const dataAtual = new Date()
        if(this.dataDeValidade < dataAtual ){
            console.log(`O seu ${this.nome} está na validade`)
        }else{
            console.log(`O seu ${this.nome} está fora da validade`)
        }
    }
}
const saborLaranja= {
    lote: 0,
    statusDeVenda: false,
    SetLote: function(novaQuantidade){
        if(this.lote != 0){
            if(novaQuantidade > 0){
                this.lote += novaQuantidade
                return true
            }else{
                if(this.lote < Math.abs(novaQuantidade)){
                    console.log(`Você tem ${this.lote} impossivel retirar ${Math.abs(novaQuantidade)}`)
                    return false
                }else{
                    this.lote += novaQuantidade
                    return true
                }
            }
        }else{
            if(novaQuantidade > 0){
                this.lote += novaQuantidade
                return true
            }else{
                console.log(`Você tem ${this.lote} impossivel retirar ${Math.abs(novaQuantidade)}`)
                return false

            }
        }
    },
    vendaDolote: function(quantidade){
        if(this.SetLote(quantidade) === true){
            this.statusDeVenda = true
        }
    }
}

Object.setPrototypeOf(saborLaranja,bebidas)

saborLaranja.nome = 'Fanta'
saborLaranja.marca = 'Coca-Cola'
saborLaranja.preco = 4.99
saborLaranja.dataDeValidade = new Date('2024-03-23')
saborLaranja.quantidade = 10
saborLaranja.lote = 2

saborLaranja.setValidardorDeValidade()
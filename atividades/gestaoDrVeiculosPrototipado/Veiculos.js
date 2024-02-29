const veiculos ={
    marca: '',
    modelo: '',
    placa: '',
    cor:'',
    anoDoVeiculo: '',
    tipoDeCombustivel: '',
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
    }
}


veiculos.marca = 'Fiat'
veiculos.modelo = 'ELX'
veiculos.placa = 'ELX-6734'
veiculos.cor = 'Vermelho'
veiculos.ano = 2005
veiculos.tipoDeCombustivel = 'Flex'
veiculos.quantidade = -3
veiculos.setQuantidade(2)

console.log(`O veiculos de marcaar ${veiculos.marca} e modelo ${veiculos.modelo}. Tem a placa ${veiculos.placa} e a cor ${veiculos.cor}. Seu tipo de combustivel é: ${veiculos.tipoDeCombustivel} e temos ${veiculos.quantidade} unidade em nossa loja`)


const veiculosUsados = {
    quantidadeDeDonos: '',
    kmRodados: 'todos',
    preco: 0,
    statusDeVenda: false,
    estadoDeConversacao: 'bom',
    vendaDoVeiculo: function(quantidade){
        this.setQuantidade(quantidade)
        if (this.setQuantidade(quantidade)=== true ){
            this.statusDeVenda = true
        }
    }
}

Object.setPrototypeOf(veiculosUsados, veiculos)

veiculosUsados.marca = 'Fiat'
veiculosUsados.modelo = 'ELX'
veiculosUsados.placa = 'ELX-6734'
veiculosUsados.cor = 'Vermelho'
veiculosUsados.ano = 2005
veiculosUsados.tipoDeCombustivel = 'Flex'
veiculosUsados.setQuantidade(2)


console.log(veiculosUsados)
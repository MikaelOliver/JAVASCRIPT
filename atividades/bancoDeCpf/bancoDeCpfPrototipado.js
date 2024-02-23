const Cliente = {
    nome: '',
    email: '',
    cpf: '',
    definirCpf: function(novoCpf){
        if(novoCpf.length === 14){
            this.cpf = novoCpf
        }else{
            console.log(`O cpf: ${novoCpf} não é um cpf valido`)
            
        }
    }

}

const cliente01 = {}

Object.setPrototypeOf(cliente01, Cliente)

cliente01.cpf = '12345678912345'
cliente01.nome = 'Mikael'
cliente01.email = 'mikael@email.com'
console.log(cliente01)
cliente01.definirCpf('12345678')
console.log(cliente01)
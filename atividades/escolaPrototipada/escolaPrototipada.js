const Funcionarios = {
    nome: '',
    cargo: '',
    salario: '',
    turno: '',
    pegarNome: function(seuNome){
        this.nome = seuNome
    }
}

const func01 = {}

Object.setPrototypeOf(func01,Funcionarios)
func01.pegarNome('Mikael')
func01.cargo = 'Estrutor'
func01.salario = 1500

console.log(func01)


export class Funcionarios{
    #salario
    constructor(nome, cargo, salario, turno){
        this.nome = nome
        this.cargo = cargo
        this.salario = salario
        this.turno = turno
    }

    get obternome(){
        return this.nome
    }
    get obtercargo(){
        return this.cargo
    }
    
    get obtersalario(){
        return this.salario
    }
    
    get obetrturno(){
        return this.turno
    }

    set mudarNome(novoNome){
        this.nome = novoNome
    }

    set mudarCargo(novoCargo){
        this.cargo = novoCargo
    }

    set mudarSalario(novoSalario){
        if(this.salario < novoSalario){
            this.salario = novoSalario
        }else{
            return `Novo salário não pode ser menor que ${this.salario}`
        }
    }

    set mudarTurno(novoTurno){
        if (this.turno === novoTurno){
            return `Seu turno já é: ${this.turno}`
        }else{
            this.turno = novoTurno
        }
    }

}
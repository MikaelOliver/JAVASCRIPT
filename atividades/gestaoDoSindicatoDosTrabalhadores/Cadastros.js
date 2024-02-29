export class Cadastro{
    constructor(nome, dataDeNascimento, cpf, endereco){
        this.nome = nome
        this.dataDeNascimento = dataDeNascimento
        this._cpf = cpf
        this.endereco = endereco
    }
    
    get getNome(){
        return this.nome
    }
    get getDataDeNascimento(){
        return this.dataDeNascimento
    }
    get getCpf(){
        return this._cpf
    }
    get getEndereco(){
        return this.endereco
    }

    set setNome(novoNome){
        this.nome = novoNome
    }

    set setDataDeNascimentos(novaDataDeNascimento){
        this.dataDeNascimento = novaDataDeNascimento
    }
    
    set setCpf(novoCpf){
        if(novoCpf.length === 14){
            this._cpf = novoCpf
        }else{
            console.log(`O cpf: ${novoCpf} não é um CPF `)
        }
    }

    set setEndereco(novoEndereco){
        this.endereco = novoEndereco
    }


} 
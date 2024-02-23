export class Cliente{
    constructor(nome,email,cpf){
        this.nome = nome
        this.email = email
        this.cpf = cpf
    }

    get pegarNome(){
        return this.nome
    }

    get pegarEmail(){
        return this.email
    }

    get pegarCpf(){
        return this.cpf
    }

    set definirNome(novoNome){
        this.nome = novoNome
    }

    set definirEmail(novoEmail){
        this.email = novoEmail
    }

    set definirCpf(novoCpf){
        if(novoCpf.length === 14){
            this.cpf = novoCpf
        }else{
            console.log(`O cpf: ${novoCpf} não é um cpf valido`)
            this.cpf = undefined
        }
    }
}
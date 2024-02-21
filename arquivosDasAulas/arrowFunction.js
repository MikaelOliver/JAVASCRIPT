// funções literais:
function soma(a,b){
    console.log (a + b)
}
soma(2,8)


// funcões anonimas:
const minhaFuncao = function(a,b){ return a + b}
console.log(minhaFuncao(4,5))


// Escopo das funções:
// this - é uma palavra reservada que faz referencias  ao PAI de um elemento. e quando o this é utilizado em funções comuns, seu PAI será o elemento local
function aluno(nomeAluno, idadeAluno, notaAluno){
    this.nomeAluno = nomeAluno
    this.idadeAluno = idadeAluno
    this.notaAluno = notaAluno

    console.log(this.nomeAluno)
    console.log(this.idadeAluno)
    console.log(this.notaAluno)
    
    this.dadosAnominos = function() {
        setTimeout(function(){
            console.log(this.nomeAluno)
            console.log(this.idadeAluno)
            console.log(this.notaAluno)
        },3000)
    }
    // arrow function - são funcões de ESCOPO aberto
    this.dadosArrow = ()=> {
        setTimeout(() => {
            console.log(this.nomeAluno)
            console.log(this.idadeAluno)
            console.log(this.notaAluno)
        },4000)
    }
}

const aluno01 = new aluno('Neyva', 19, 7.0)
aluno01.dadosAnominos()
aluno01.dadosArrow()

// sobre Arrow Fuction
// 1. Tem return Embutido
const dobro = (a) =>  a * 2
console.log(dobro(4))

// 2. argumento implicito
let multiplicar = _ => 2 * 2
console.log(multiplicar())
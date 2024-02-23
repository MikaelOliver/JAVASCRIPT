import { Funcionarios } from "./Funcionarios.js";

export class Professor extends Funcionarios{
    constructor(nome, cargo, turno, disciplina,turma){
        super(nome,cargo,turno)
        this._disciplina = disciplina
        this._turma = turma
    }

    get disciplina(){
        return this._disciplina
    }

    set mudardisciplina(novodisciplina){
        this._disciplina = novodisciplina
    }

    set mudarTurma(novoTurma){
        this._Turma = novoTurma
    }
}
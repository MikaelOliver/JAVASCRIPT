// arquivo de classe sempre é Maiusculo a primeira letra

export class Mamifero{
    constructor(patas){
        this.patas = patas
    }

    get obertPatas(){
        return this.patas
    }

    /**
     * @param {any} novasPatas
     */
    set mudarPatas(novasPatas){
        this.patas = novasPatas
    }

}
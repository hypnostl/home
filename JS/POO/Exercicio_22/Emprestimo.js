const Parcelas = require("./Parcelas")

class Emprestimo{
 static #taxaDeJuros = 1.05
    constructor(valorEmprestimo, parcelas){
        this.valorEmprestimo = valorEmprestimo
        this.parcelas = []
        for(let i = 1; i < parcelas; i++)
        {this.parcelas.push(new Parcelas((valorEmprestimo * Emprestimo.#taxaDeJuros) / parcelas,i))}
        this.datacriacao = new Date()
    }
    

     static get taxaDeJuros()
    {return Emprestimo.#taxaDeJuros}

    static set taxaDeJuros(novoJuros)
    { Emprestimo.#taxaDeJuros = 1 + (novoJuros / 100)}
}

module.exports = Emprestimo
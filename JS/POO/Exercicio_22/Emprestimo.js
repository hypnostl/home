class Emprestimo{
    #taxaDeJuros
    constructor(valorEmprestimo, dataEmprestimo, parcelas){
        this.#taxaDeJuros = 1.45
        this.valorEmprestimo = valorEmprestimo
        this.dataEmprestimo = dataEmprestimo
        this.parcelas = parcelas
    }
    get taxaDeJuros()
    {return this.#taxaDeJuros}

    set taxaDeJuros(novoJuros)
    { this.#taxaDeJuros = novoJuros}
}

module.exports = Emprestimo
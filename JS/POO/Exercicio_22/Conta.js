const Deposito = require('./Deposito.js') 
const Emprestimo = require('./Emprestimo.js')
const Transferencia = require('./Transferencia.js')

class Conta extends (Deposito, Emprestimo, Transferencia){
    #saldo 

    constructor(usuario)
    {
        this.usuario = usuario
        this.#saldo = 0
        this.depositos = []
        this.empresitmos = []
        this.Transferencia = []

    }
get saldo(){
    return this.#saldo
}

adicionaDeposito(deposito)
{
    this.#saldo += deposito.valor
    this.depositos.push(deposito)
}

}


module.exports = Deposito

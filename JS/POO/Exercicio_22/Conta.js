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
        this.transferencias = []

    }
get saldo(){
    return this.#saldo
}

adicionaDeposito(deposito)
{
    this.#saldo += deposito.valor
    this.depositos.push(deposito)
}

adicionaEmprestimo(empresitmo)
{
    this.#saldo += empresitmo.valor
    this.empresitmos.push(empresitmo)
}

adicionaTransferencia(transferencia)
{
    if(transferencia.usuarioEnvia.email === this.usuario.email)
    {this.#saldo += transferencia.valor}
    else if(transferencia.usuarioEnvia.email === this.nomeUsuario.email)
    {this.#saldo -= transferencia.valor
        this.transferencias.push(transferencia)
    }
}
}


module.exports = Deposito

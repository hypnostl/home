const Deposito = require('./Deposito.js') 
const Emprestimo = require('./Emprestimo.js')
const Transferencia = require('./Transferencia.js')

class Conta extends (Deposito, Emprestimo, Transferencia){
    #saldo = 0
    constructor(depoisito, emprestimo, transferencia)
    {
        this.Deposito = depoisito
        this.emprestimo = emprestimo
        this.transferencia = transferencia
    }

    novoDeposito(valor,data){
       const deposito =  new Deposito(valor,data)
        console.log(deposito)
    }

    novoEmprestimo(){}

    transferencia(){}

}

const teste = new Conta(100,0,0)
teste.novoDeposito(200,"20/06/2014")


module.exports = Deposito

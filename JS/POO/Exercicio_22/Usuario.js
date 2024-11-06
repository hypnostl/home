const Conta = require('./Conta')
class Usuario {
    constructor(nomeUsuario, email) {
        this.nomeUsuario = nomeUsuario
        this.email = email
        this.conta = new Conta(this)
    }
}

module.exports = Usuario
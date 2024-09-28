const Usuario = require("./Usuario");

class Transferencia extends Usuario{
    constructor(usuarioTransferencia, usuarioReceptor, valorDeposito, dataDeposito)
    {
        this.usuarioReceptor = super(usuarioTransferencia,this.email,this.conta)
        this.usuarioReceptor = super(usuarioReceptor,this.email, this.conta)
        this.valorDeposito = valorDeposito
        this.dataDeposito = dataDeposito
    }
}



module.exports = Transferencia
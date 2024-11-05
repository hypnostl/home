const Usuario = require("./Usuario");

class Transferencia extends Usuario{
    constructor(usuarioTransferencia, usuarioReceptor, valorDeposito)
    {
        this.usuarioTransferencia = usuarioTransferencia
        this.usuarioReceptor = usuarioReceptor
        this.valorDeposito = valorDeposito
        this.dataDeposito = new Date()
    }
}



module.exports = Transferencia
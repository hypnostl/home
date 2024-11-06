const Usuario = require("./Usuario");

class Transferencia extends Usuario{
    constructor(usuarioEnvia, usuarioRecebe, valorDeposito)
    {
        this.usuarioEnvia = usuarioEnvia
        this.usuarioRecebe = usuarioRecebe
        this.valorDeposito = valorDeposito
        this.dataDeposito = new Date()
    }
}



module.exports = Transferencia
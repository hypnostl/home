const Deposito = require("./Deposito")
const Emprestimo = require("./Emprestimo")
const Transferencia = require("./Transferencia")
const Usuario = require("./Usuario")

class App{
    static #user = []

    static procurarUser(email)
    {const user = this.#user.find(user => user.email === email)
        return user ?? null
    }


static createUser(email, nome)
{
    const userExiste = App.procurarUser(email)
    if (!userExiste)
    {
        this.#user.push(new Usuario(email,nome)) 
    }
}

static addDeposito(email, valor)
{
    const user = App.procurarUser(email)
    if (user)
    {const novoDeposito = Deposito(valor)
        Usuario.conta.addDeposito(novoDeposito)
    }
}

static addTranferencia(doUsuario, paraUsuario, valor)
{
    const doUsuario = App.procurarUser(doUsuario)
    const paraUsuario = App.procurarUser(paraUsuario)
    if(doUsuario && paraUsuario)
    {
        const novaTrasnferencia = new Transferencia(doUsuario, paraUsuario, valor)
        paraUsuario.conta.addTranferencia(novaTrasnferencia)
        paraUsuario.conta.novaTrasnferencia(novaTrasnferencia)
    }
}
    static pegarEmprestimo(emai,valor, parcelas)
    {
        const usuario = App.procurarUser(emai)
        if(usuario){
            const novoEmprestimo = new Emprestimo(valor, parcelas)
            Usuario.conta.addDeposito(novoEmprestimo)
        }
    }

    static mudarTaxaJuros (novoJuros)
{
    Emprestimo.taxaDeJuros = novoJuros
}


}

module.exports = App
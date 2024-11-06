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

static 
}
class User {
    constructor(user, email, password){
        this.fullname = user
        this.email = email
        this.password = password
        

    }
    verificar()
    {
       if(this.email === "thiago@hotmail.com" && this.password === 160988)
       {console.log(`Login comcluido!!!`)}
       else{console.log("Email ou senha divergente")}
       
}
}
const thiago = new User("Thiago Lopes", "thiago@hotmail.com", 160988)


console.log(thiago)
thiago.verificar()

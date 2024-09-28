//const Address = require("./Endereco")
const Person = require("./Person")


const thiago = new Person("Thiago","Elisa",55,"Piraja","Belo Horizonte", "MG")

console.log(thiago)
console.log(thiago.address.fullAddress())
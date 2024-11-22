

function imc (peso, altura){

return new Promise((resolve, reject)=>{
    peso 
    altura 
   if(!Number.isNaN(peso,altura))
   {
    resolve(console.log(`Peso é ${peso}kg e Altura é ${altura}m`))
}else{
reject(console.log("Não é numero"))
}
})
}

const thiago = imc(1,10)

thiago.then(()=>{
    console.log("Foi resolvido")
}).catch((err)=>{
    console.log("Rejeitada")
})


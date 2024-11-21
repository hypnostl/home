function execute(){
    return new Promise((resolve, reject)=>{
        console.log(`A promise está sendo executada...`)
        setTimeout(()=>{
            if(false)
            {
                reject(false)
            }else{
            console.log(`Resolvendo a promise...`)
            resolve(42)
        }
        },1000)
    })
}

const p = execute()

execute().then((Resultado)=>{
    console.log(`A promise foi resolvida. O resultada foi: ${Resultado}`)
}).catch((err)=>{
    console.log(`A promise foi rejeitada. Motivo: ${err}`)
}).finally(()=>{
    console.log(`A primise foi finalizda!`)
})




// pondente = pending
//resolvida = resolved
//rejeitada = rejected

const p = new Promise((resolved, rejected) => {
    console.log("A promise esta sendo executadda")
    setTimeout(()=>{
        if(true)
        {
            rejected(false)
        }
        console.log("Resolvendo a Promise ")
        resolved(true)
    },2000)
})


console.log(p)

setTimeout(()=>{
    console.log(p)
},3000)
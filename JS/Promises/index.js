
// pondente = pending
//resolvida = resolved
//rejeitada = rejected


function execut ()
{
    return new Promise((resolved, rejected)=>{
        console.log("A promise esta sendo executada")
    },100)

}


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
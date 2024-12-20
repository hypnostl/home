async function asyncSum(a, b) {
    if(typeof a !== 'number' ||typeof b !== 'number' ){
        return Promise.reject("Os argumentos tem que ser numero")
    }else{
    return a + b}
}

// async function execute() {
//     asyncSum(50,33).then(result => {console.log(result)})
// }

async function execute() {

    try{
    const result = await asyncSum(50,true)
    console.log(result)
}catch(err){console.log(err)}
}

execute()
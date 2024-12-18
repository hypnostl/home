async function asyncSum(a, b) {
    if(typeof a !== 'number' ||typeof b !== 'number' ){
        return Promise.reject("Os argumentos tem que ser numero")
    }else{
    return a + b}
}

async function asyncSubtract(a, b) {
    if(typeof a !== 'number' ||typeof b !== 'number' ){
        return Promise.reject("Os argumentos tem que ser numero")
    }else{
    return a - b}

}

const sumResult = asyncSum(50, 33)
const subtractResult = asyncSubtract(50, 33)

Promise.all([sumResult, subtractResult]).then(results => {
    console.log(results)
}).catch(err => {
    console.log(err)
})
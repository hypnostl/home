const os = require("node:os")

function configPC(){
    const sistemaOperacional = os.version()
    const arq = os.arch()
    const processador = os.cpus()
    const tempoAtividade = os.uptime()
    const usoDaMemoria =os.totalmem() - os.freemem() 
    const memoria = os.totalmem()
    console.log(sistemaOperacional)
    console.log(arq)    
    console.log(processador[0])
    console.log(tempoAtividade)
    console.log(usoDaMemoria/1024/1024/1024)
    
    //console.log(memoria/1024/1024/1024)
}

configPC()
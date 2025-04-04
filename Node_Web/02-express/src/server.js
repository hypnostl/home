const express = require('express')

const server = express()

server.get('/',(request, response)=>{
    response.send(`Servidor Express funcionando! \nVocê esta na pagina inicial`)
})

server.get('/artigos',(req, res)=>{
    res.send("Você esta na pagina de artigos")
})

const PORT = 3000

server.listen(PORT, ()=>{
    console.log(`Servidor Express iniciado em <http://localhost:${PORT}/`)
})
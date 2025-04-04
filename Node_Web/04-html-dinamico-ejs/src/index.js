const express = require ('express')
const path = require('node:path')

const app = express()

app.set('view engine')

app.get('/', (req, res)=>{
    res.send("Hello world")
})


const PORT = 3000
app.listen(PORT, ()=>console.log(`Servidor iniciado!`))
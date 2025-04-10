const express = require('express')
const path = require('node:path')

const app = express()

const storeUsers = []
//configuração do EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//configuração do body
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  const title = "Homepage"
  const message = "Mensagem dinamica de teste em EJS"

  res.render('index',{title, message})
})

app.get('/formulario', (req,res)=>{
  res.render('form')
})

app.post('/register', (req, res)=>{
const username = req.body.username
const passworld = req.body.passworld


storeUsers.push(username, passworld)
res.redirect('/usuarios')
})

app.get('/usuarios',(req, res)=>{
  res.render('users', {users:storeUsers})
})
const PORT = 3000
app.listen(PORT, () => {
  console.log('Servidor iniciado!')
})


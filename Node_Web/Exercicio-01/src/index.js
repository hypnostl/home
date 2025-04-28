const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Define o caminho para a pasta de views
const viewsPath = path.join(__dirname, 'views');

// Configura o Express para usar o EJS como engine de template
app.set('view engine', 'ejs');
app.set('views', viewsPath);

// Define uma rota para a raiz do servidor (/) que renderiza um arquivo EJS
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/cadastro', (req, res) => {
  res.render('cadastro');
 });

 app.post('/users', (req, res) => {
    // Os dados do formulário estarão disponíveis em req.body
    const username = req.body.username;
    const password = req.body.password;

    console.log('Nome de Usuário:', username);
    console.log('Senha:', password);

    // Aqui você pode processar os dados (salvar no banco de dados, etc.)

    res.redirect('/sucesso'); // Redireciona para a página de sucesso
});

app.get('/sucesso', (req, res) => {
  res.render('sucesso');
});

app.get('/users', (req, res) => {
  res.render('users');
});
// Inicia o servidor e o faz escutar na porta definida
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
  console.log(`Procurando arquivos EJS em: ${viewsPath}`);

});
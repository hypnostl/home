const fs = require("node:fs");

function criar(conteudo) {
  fs.writeFile("meuarquivo.txt", conteudo, "utf-8", (err) => {
    if (err) {
      console.log("Não foi possivel criar o arquivo: ", err.message);
    }
  });
  console.log("Arquivo criado com sucesso!");
}

function reescrever(conteudo) {
  if(fs.existsSync("./meuarquivo.txt"))
  {
  fs.writeFile("meuarquivo.txt", conteudo, "utf-8", (err) => {
    if (err) {
      console.log("Não foi possivel reescrever o arquivo: ", err.message);
    }
  });
  console.log("Arquivo reescrito com sucesso!");
}else{console.log("Arquivo não exixte!")}
}

reescrever("Novo arquivo testes");

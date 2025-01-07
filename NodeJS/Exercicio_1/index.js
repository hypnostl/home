import fs from "node:fs"
export function criar(conteudo) {
  fs.writeFileSync("meuarquivo.txt", conteudo, "utf-8", (err) => {
    if (err) {
      console.log("Não foi possivel criar o arquivo: ", err.message);
    }
  });
  console.log("Arquivo criado com sucesso!");
}

export function reescrever(conteudo) {
  if (fs.existsSync("./meuarquivo.txt")) {
    fs.writeFile("meuarquivo.txt", conteudo, "utf-8", (err) => {
      if (err) {
        console.log("Não foi possivel reescrever o arquivo: ", err.message);
      }
    });
    console.log("Arquivo reescrito com sucesso!");
  } 
}

export function ler() {
  fs.readFile("./meuarquivo.txt", "utf-8", (err, data) => {
    if (err) {
     return console.log("Arquivo não encontrado");
    }
    console.log(data);
  });
}

export function excluir() {
  fs.unlink("./meuarquivo.txt", (err) => {
    if(err){
    return console.log("Arquivo não existe");}

      
  });
  
}


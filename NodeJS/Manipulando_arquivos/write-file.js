const fs = require("node:fs");
const content = "Conteudo do novo arquivo node.js!!!";
fs.writeFile("./arquivo.txt", content, "utf-8", (err) => {
  if (err) {
    console.log(`Erro ao criar o arquivo `, err.message);
    return;
  }
  console("Aquivo criado com sucesso sinc");
});

// try{
//     fs.writeFileSync("./arquivo.txt","Ola mundo node.js","utf-8")
//     console.log("Arquivo criado com sucesso")
// } catch(err){console.log(`Erro ao criar o arquivo ${err}`)}

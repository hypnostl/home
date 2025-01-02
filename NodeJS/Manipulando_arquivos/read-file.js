const { error } = require("node:console");
const fs = require("node:fs");

fs.readFile("./arquivo.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Erro ao ler arquivo", err.message);
    return;
  }
  console.log(data);
});

// try{
//   const data =  fs.readFileSync("./arquivo.txt","utf-8")
//   console.log(data)
// }catch(err){console.log(`Erro de leitura ${err}`)}

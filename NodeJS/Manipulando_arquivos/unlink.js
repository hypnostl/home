const fs = require("node:fs")

fs.unlink("arquivo.txt",(err)=>{
    console.log("erro para excluir")})
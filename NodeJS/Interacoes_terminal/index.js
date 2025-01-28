// process.stdout.write("Olá, mundo! \n" )

// process.stdin.on("data", (data)=>{
//     process.stdout.write(`Digite agora: ${data}`)
// })

const readline = require("node:readline")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// rl.on("line", (input)=>{
//     rl.write(`Você digitou: ${input}`)
// })


rl.question("Qual é o seu nome? " , (answer)=>{
    rl.write(`Bem vindo ${answer}! \n`)
   // rl.close()
})


// // rl.on("close", ()=>{
// //     rl.write("Saindo...")
// //     //process.exit(0)
// // })

rl.on("SIGINT", ()=>{
    rl.question("Deseja sair? (y/n)", (answer)=>{
        if(answer === "y")
        {process.exit(0)}else{
            rl.write("Continuando...!")
        }
    })
})
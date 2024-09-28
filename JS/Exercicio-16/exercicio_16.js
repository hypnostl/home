const dayjs = require("dayjs");

const data = "1988-09-16"
 const niver  = dayjs(data)
 const hoje = dayjs()


 const idade = hoje.diff(niver, 'years')
 const diasFalta = niver.add(idade+1,'year').diff(hoje, 'days') +1

 console.log(`Idade: ${idade} anos // ${niver.add(idade+1,'years').format('DD/MM/YYYY')} falta ${diasFalta}`)



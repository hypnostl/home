function imc(peso, altura) {
  return new Promise((resolve, reject) => {
    peso;
    altura;
    if (!Number.isNaN(peso / altura)) {
      console.log(peso / altura);
      resolve(`Peso é ${peso}kg e Altura é ${altura}m. O IMC é ${peso/(altura*altura)}`);
    } else {
      reject("Não é numero");
    }
  });
}

const thiago = imc(88,1.79);
console.log(thiago);

thiago.then(() => {
    console.log("Foi resolvido");
  })
  .catch((err) => {
    console.log(`Rejeitada ${err}`);
  })
  .finally(() => {
    console.log("Finalizada!");
  });

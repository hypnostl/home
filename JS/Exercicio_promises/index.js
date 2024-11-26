function imc(peso, altura) {
  return new Promise((resolve, reject) => {
    peso;
    altura;
    if (!Number.isNaN(peso / altura)) {
      console.log(`O peso é ${peso} e a altura é ${altura}`)
      resolve(peso / (altura*altura));
    } else {
      reject("Não é numero");
    }
  });
}


function calculoImc(peso, altura)
{
  const pessoa = imc(peso,altura);
  
  
  pessoa.then((resultado) => {
    if (resultado < 18.5) {
      console.log("Mgraza");
  } else if (resultado >= 18.5 && resultado <= 24.9) {
      console.log("Normal");
  } else if (resultado >= 25 && resultado <= 29.9) {
      console.log("Sobrepeso");
  } else if (resultado >= 30 && resultado <= 39.9) {
      console.log("Obesidade");
  } else if (resultado >= 40) {
      console.log("Obedidade grave");
  } else {
      return "Valor inválido";
  }
    })
    .catch((err) => {
      console.log(`Rejeitada ${err}`);
    })
    .finally(() => {
      console.log("Finalizada!");
    });
}

calculoImc("aa",1.8)
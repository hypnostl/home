function imc(peso, altura) {
  return new Promise((resolve, reject) => {
    if (typeof peso !== 'number' || typeof altura !== 'number') {
      reject("Peso ou aultura não é numero!!!");
    } else {
      
      resolve(peso / (altura * altura));
    }
  });
}

function calculoImc(peso, altura)
{
  imc(peso,altura).then((resultado) => {
    console.log(`O peso é ${peso} e a altura é ${altura}`);
    if (resultado < 18.5) {
      console.log(`O IMC é ${resultado}. Você está com magreza.`);
    } else if (resultado >= 18.5 && resultado <= 24.9) {
      console.log(`O IMC é ${resultado}. Você está com peso normal.`);
    } else if (resultado >= 25 && resultado <= 29.9) {
      console.log(`O IMC é ${resultado}. Você está com sobrepeso.`);
    } else if (resultado >= 30 && resultado <= 39.9) {
      console.log(`O IMC é ${resultado}. Você está com obesidade.`);
    } else if (resultado >= 40) {
      console.log(`O IMC é ${resultado}. Você está com obesidade grave.`);
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

calculoImc(88, 1.8);

calculoImc(120,1,8)
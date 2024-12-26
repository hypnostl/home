async function imc(peso, altura) {
  if (typeof peso !== "number" || typeof altura !== "number") {
    return Promise.reject("algum parametro não é número!!!");
  } else {
    return peso / (altura * altura);
  }
}

async function calculoImc(peso, altura, nome) {
  try {
    const result = await imc(peso, altura);

    if (result < 18.5) {
      console.log(`${nome} o seu IMC é ${result}. Você está com magreza.`);
    } else if (result >= 18.5 && result <= 24.9) {
      console.log(`${nome} o seu IMC é ${result}. Você está com peso normal.`);
    } else if (result >= 25 && result <= 29.9) {
      console.log(`${nome} o seu IMC é ${result}. Você está com sobrepeso.`);
    } else if (result >= 30 && result <= 39.9) {
      console.log(`${nome} o seu IMC é ${result}. Você está com obesidade.`);
    } else if (result >= 40) {
      console.log(
        `${nome} o seu IMC é ${result}. Você está com obesidade grave.`
      );
    } else {
      return "Valor inválido";
    }
  } catch (err) {
    console.log(nome, err);
  }
}


calculoImc(80, 1.80, "Thiago");

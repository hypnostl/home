const nave ={
    name: "Falcon"
    velocidade: 100
}


function acelerar(nave: { name: string; velocidade: number }, velocidade: number)
{
nave.velocidade = velocidade
}


acelerar(nave, 50)
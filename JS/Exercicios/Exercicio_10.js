
let Vagas = []

let numero

//criando uma vaga
function novavaga()
{
 
const nome = prompt("Nome da vaga")
const descricao = prompt("Descrição")
const data = prompt("Data limite")
const indice = prompt("ID vaga")


const Confirmacao = confirm("Deseja criar a vaga " + nome + " índeice "  + indice + " ?"   )
if(Confirmacao)
{
const CriarVagas= {nome, descricao, data, indice, candidato:[]}
Vagas.push(CriarVagas)
console.log(CriarVagas)
}
}


//inscrever candidato em uma vaga

function novocadidato()
{

    const idVaga = prompt("Digite o ID da vata ") -1
    const nomeCandidato = prompt("Digite o nome do candidato ")
    const confircao = confirm("Deseja incluir o candidato " + nomeCandidato + " para a vaga " + Vagas[idVaga].nome+ "? " )
    {
    Vagas[idVaga].candidato.push(nomeCandidato)
    }
}
 
//visualizar vaga
function VisualizarVagas() {
  const indice = prompt("Digite o indeice da vaga ");
  const Vaga = Vagas[indice];

  
  if (Vaga === undefined) {
    alert("Vaga não encontrada");
    return;
  }

  alert("ID da vaga: " + Vaga.indice +
    "\nNome da vaga: " + Vaga.nome +
    "\nDescrição: " + Vaga.descricao +
    "\nQtd candidatos da vaga: " + Vaga.candidato.length +
    "\nCandidatos: \n" + Vaga.candidato.join("\n"));
}

//listar vagas

function ListarVagas()
{
   const litarVagas = Vagas.reduce((concatenar, vaga, indice)=> 
   {
    concatenar += Vagas.indice + Vagas.nome
    return concatenar
   })
   alert(ListarVagas)
}

//excluir vaga

function ExcluirVaga()
{
    const idVaga = prompt("Digite o ID da vaga que sera excluida") -1
    const Confirmacao = confirm("Deseja escluir a vaga " + Vagas[idVaga].nome + Vagas[idVaga].descricao+ Vagas[idVaga].data)
    if(Confirmacao)
    {
    Vagas.splice(idVaga -1, 1)
    alert("Vaga excluida")
   }
}

do{
numero = prompt("Digite numero:\n" + "1 - Criar nova vaga\n" + "2 - Listar vagas\n" + "3 - Inscrever candidato\n" + "4 - Visualizar Vaga\n" + "5 - Excluir vaga\n" + "6 - Sair")
switch(numero){
    case "1":novavaga();
    
    break;
    case "2":ListarVagas()
    break;
    case "3":novocadidato()
    break;
    case "4":VisualizarVagas()
    break;
    case "5":ExcluirVaga()
    break;
}
} while(numero != 6)    
    
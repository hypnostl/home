const os = require("node:os");
const fs = require("node:fs");
const path = require("node:path");

function criarLog() {
  const sistemaOperacional = os.version();
  const arq = os.arch();
  const processador = os.cpus()[0].model;
  const tempoAtividade = Math.floor(os.uptime() / 60 / 60);
  const usoDaMemoria = os.totalmem() - os.freemem();
  function obterDataHoraAtualFormatada() {
    const dataAtual = new Date();
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return dataAtual.toLocaleDateString("pt-BR", options);
  }
  //console.clear();
  console.log(`SO: ${sistemaOperacional}`);
  console.log(`Arquitetura: ${arq}`);
  console.log(`Processador: ${processador}`);
  console.log(`Tempo de atividade: ${tempoAtividade}`);
  console.log(`Uso da memória: ${usoDaMemoria / 1024 / 1024 / 1024}`);
  console.log(obterDataHoraAtualFormatada());

  salvarlog(
    sistemaOperacional,
    arq,
    processador,
    tempoAtividade,
    usoDaMemoria,
    obterDataHoraAtualFormatada()
  );
}

function salvarlog(
  sistemaOperacional,
  arq,
  processador,
  tempoAtividade,
  usoDaMemoria,
  dataAtual
) {
  const textoLog = `SO: ${sistemaOperacional} \n Arquitetura: ${arq} \n Processador: ${processador} \n Tempo de atividade: ${tempoAtividade} \n Uso da memória: ${
    usoDaMemoria / 1024 / 1024 / 1024
  }GB \n ${dataAtual} \n\n`;

  
    try {
      fs.appendFileSync("./log.txt", textoLog);
      console.log("Informação adicionada com sucesso!");
    } catch (err) {
      console.error("Erro ao adicionar informação ao arquivo:", err);
    }}





criarLog()

// setInterval(() => {
//   criarLog();
// }, 1000);

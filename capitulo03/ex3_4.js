const prompt = require("prompt-sync")() // adiciona o pacote ao programa
//Entrada de Dados//
let peso_da_racao = Number(prompt("Qual o peso(EM KG) de ração que você deseja compra? "));
let consumo_diario = Number(prompt("Qual o consumo diário do seu gato (EM GRAMAS)? "));

//Processamento dos Dados//
let peso_da_racao_em_gramas = peso_da_racao*1000;
let duracao = parseInt(peso_da_racao_em_gramas/consumo_diario);
let resto_de_racao = peso_da_racao_em_gramas%consumo_diario;

//Saida dos Dados//
console.log(`A duração da ração será de: ${duracao} dias\nO resto da ração será de ${resto_de_racao} gramas`)


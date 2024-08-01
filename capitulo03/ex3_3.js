/*Elaborar um programa para uma empresa que leia o salário e o tempo
que um funcionário trabalha na empresa. Sabendo que a cada 4 anos
(quadriênio) o funcionário recebe um acréscimo de 1% no salário, calcule e
informe o número de quadriênios a que o funcionário tem direito e o salário
final.*/

const prompt = require("prompt-sync")() // adiciona o pacote ao programa
//Recebe os dados do funcionário//
let salario = Number(prompt("Qual seu salário? "))
let tempo_de_trabalho = Number(prompt("Quantos anos de trabalho você possui? "))

//Processamento dos dados//
let acrescimo_anual = parseInt(tempo_de_trabalho/4);
let acrescimo_anual_em_porcentagem = (acrescimo_anual/100)
let aumento_salarial = salario + (salario*acrescimo_anual_em_porcentagem);

//Saida dos dados//
console.log(`O seu salário, de acordo com as informações fornecidas é de: R$ ${aumento_salarial.toFixed(2)}`)


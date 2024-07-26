let frm = document.querySelector('form');
let resposta1 = document.querySelector('h3');

frm.addEventListener('submit', (e) =>{
    let valor_por_quinze_minutos = Number(frm.inPreco.value);
    let tempo_de_uso = Number(frm.inTempo.value);

    let valor_inteiro = Math.floor(tempo_de_uso/15)*valor_por_quinze_minutos;
    console.log(valor_inteiro)
    
    let valor_decimal = Math.round((tempo_de_uso%15)/15)*valor_por_quinze_minutos;
    console.log(valor_decimal)

    let valor_total = valor_inteiro+valor_decimal;

    resposta1.innerText = `Valor a Pagar R$: ${valor_total.toFixed(2)}`;

    e.preventDefault();
})
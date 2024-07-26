let frm = document.querySelector('form');
let resp1 = document.getElementById('outProduto');
let resp2 = document.getElementById('outValor');

frm.addEventListener('submit', (e)=>{
    let medicamento = frm.inMedicamento.value;
    let preco = Number(frm.inPreco.value);

    let valor_duas_unidades = Math.floor((preco*2));

    resp1.innerText = `Promoção de ${medicamento}`;
    resp2.innerText = `Leve 2 por apenas R$: ${valor_duas_unidades.toFixed(2)}`;

    e.preventDefault();
})
let frm = document.querySelector("form");
let resp = document.querySelector("h3");

frm.addEventListener('submit', (e) =>{
    let preco = Number(frm.inPreco.value);
    let consumo = Number(frm.inConsumo.value);

    let valor_total = (preco*(consumo/1000))

    resp.innerText = `Valor a Pagar R$: ${valor_total.toFixed(2)}`;

    e.preventDefault();
})
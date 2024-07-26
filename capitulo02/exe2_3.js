let frm = document.querySelector("form");
let resp1 = document.querySelector("#outVeiculo");
let resp2 = document.querySelector("#outValor");

frm.addEventListener('submit', (e) =>{
    let nome_do_veiculo = frm.inVeiculo.value;
    let preco_do_veiculo = frm.inPreco.value;

    let valor_de_entrada = preco_do_veiculo*0.5;
    let valor_parcelado = valor_de_entrada/12;

    resp1.innerText = `Promoção: ${nome_do_veiculo}`;
    resp2.innerText = `Entrada de R$: ${valor_de_entrada.toFixed(2)}\n\n + 12x de R$: ${valor_parcelado.toFixed(2)}`;

    e.preventDefault();
})
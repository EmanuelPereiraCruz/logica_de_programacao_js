let frm = document.querySelector('form');
let resp1 = document.getElementById('outProduto');
let resp2 = document.getElementById('outTerceiroItem');

frm.addEventListener('submit', (e) =>{
    //Entrada de Dados:
    let nome_do_produto = frm.inProduto.value;
    let preco_do_produto = Number(frm.inPreco.value);

    //Processamento de Dados:
    let valor_terceiro_item = (preco_do_produto/2);
    let valor_final= (preco_do_produto*2+valor_terceiro_item);

    //Saida de Dados:
    resp1.innerText = `${nome_do_produto} - Promoção: Leve 3 por R$: ${valor_final.toFixed(2)}`;
    resp2.innerText = `O 3º produto custa apenas R$: ${valor_terceiro_item.toFixed(2)}`;

    e.preventDefault();
})
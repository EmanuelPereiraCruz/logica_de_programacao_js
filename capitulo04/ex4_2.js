let frm = document.querySelector('form');
let saida_01 = document.querySelector('h3');

frm.addEventListener('submit', (e) =>{
    let nome = frm.inNome.value;
    let altura = Number(frm.inAltura.value);
    let rdMasculino = frm.inRadioMasculino.checked;/*Como usei no HTML um input do tipo radio, 
    para checar se ele foi marcado, ou seja, se o seu valor é true, usei o .checked. Com isso, 
    estou avaliando se o botão com id: inRadioMasculino está marcado. */
    let pesoIdeal; //Declarei a variável com let, pois seu valor pode ser reatribuido, conforme execução do código.

    if(rdMasculino){
        pesoIdeal = 22*Math.pow(altura,2);
    }else{
        pesoIdeal = 21*Math.pow(altura,2);
    }
    saida_01.innerText = `${nome}: seu peso ideal é ${pesoIdeal.toFixed(3)} KG.`
    e.preventDefault();
})

frm.addEventListener('reset', ()=>{
    saida_01.innerText=""
})
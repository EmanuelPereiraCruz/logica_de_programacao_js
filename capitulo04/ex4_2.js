let frm = document.querySelector('form');
let saida_01 = document.querySelector('h3');

frm.addEventListener('submit', (e) =>{
    let nome = frm.inNome.value;
    let altura = Number(frm.inAltura.value);
    let rdMasculino = frm.inRadioMasculino.checked;
    let pesoIdeal;

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
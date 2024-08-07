let frm = document.querySelector('form');
let resp01 = document.querySelector('#outNota');
let resp02 = document.querySelector('#outResultado');

frm.addEventListener("submit", (e) =>{
    //Convertendo a entrada em Number//
    let nome_do_aluno = frm.inAluno.value;
    let notaUm = Number(frm.inNotaUM.value);
    let notaDois = Number(frm.inNotaDois.value);

    let media_final = (notaUm+notaDois)/2
    resp01.innerText = `Média das Notas: ${media_final.toFixed(2)}`;

    //Valida a Situação do Aluno de Acordo com sua média final:
    if(media_final>=7){
        resp02.innerText = `Parabéns, ${nome_do_aluno}! Você foi aprovado(a).`;
        resp02.style.color='blue'//Estiliza a saída. 
    }else{
        resp02.innerText = `Infelizmente, ${nome_do_aluno}! Você foi reprovado(a).`;
        resp02.style.color='red'
    }
    e.preventDefault();
})
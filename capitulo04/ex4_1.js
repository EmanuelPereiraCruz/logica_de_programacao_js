let frm = document.querySelector('form');//Referência ao formulário do HTML;
let resp01 = document.querySelector('#outNota');//Referência ao ID do h3. Id sempre usar o # pra referênciar.
let resp02 = document.querySelector('#outResultado');//Referência ao ID do h3

frm.addEventListener("submit", (e) =>{
    //Convertendo a entrada em Number//
    let nome_do_aluno = frm.inAluno.value;
    let notaUm = Number(frm.inNotaUM.value);
    let notaDois = Number(frm.inNotaDois.value);

    let media_final = (notaUm+notaDois)/2
    resp01.innerText = `Média das Notas: ${media_final.toFixed(2)}`;//Uso de String Template.

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
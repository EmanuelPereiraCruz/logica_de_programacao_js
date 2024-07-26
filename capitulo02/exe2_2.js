let frm = document.querySelector("form");
let resp1 = document.querySelector("h3");
let resp2 = document.querySelector("h4");

frm.addEventListener('submit', (e) =>{
    let titulo = frm.inFilme.value;
    let duracao = Number(frm.inDuracao.value);

    let horas = parseInt(duracao/60);
    console.log(horas)
    let minutos = duracao%60;

    resp1.innerText = titulo;
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`;

    e.preventDefault();
})
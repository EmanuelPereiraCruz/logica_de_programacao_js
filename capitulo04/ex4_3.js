const frm = document.querySelector('form');
const resp_01 = document.querySelector('h3');

frm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let horaNoBrasil = Number(frm.inHoraBrasil.value);
    let horaNaFranca = horaNoBrasil+5;

    if(horaNaFranca>24){
        horaNaFranca = horaNaFranca-24
    }
    resp_01.innerText = `Hora na França: ${horaNaFranca.toFixed(2)}h`
})
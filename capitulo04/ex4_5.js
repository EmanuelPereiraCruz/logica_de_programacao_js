const frm = document.querySelector('form');
const resp_01 = document.querySelector('#outResp01');
const resp_02 = document.querySelector('#outResp02');
const resp_03 = document.querySelector('#outResp03');

frm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let saque = Number(frm.inSaque.value);

    if(saque%10!=0){
        alert("SAQUE INVÁLIDO!")
        frm.inSaque.focus
        return;
    }

    let quantidadeDeNotasdeDez;
    let quantidadeDeNotasdeCinquenta;
    let quantidadeDeNotasdeCem;

    if(saque>=10 && saque<50){
        quantidadeDeNotasdeDez = (saque/10)
        resp_01.innerText = `Notas de R$ 10: ${quantidadeDeNotasdeDez}`}

    if(saque>=50 && saque<100){
        quantidadeDeNotasdeCinquenta = parseInt(saque/50);
        resp_02.innerText = `Notas de R$ 50: ${quantidadeDeNotasdeCinquenta}`
        quantidadeDeNotasdeDez = parseInt(saque%50)/10;
        resp_01.innerText = `Notas de R$ 10: ${quantidadeDeNotasdeDez}`}
        
        
    if(saque>=100){
        quantidadeDeNotasdeCem = parseInt(saque/100);
        let resto_de_cem = (saque%100);
        quantidadeDeNotasdeCinquenta = parseInt(resto_de_cem/50);
        quantidadeDeNotasdeDez = (resto_de_cem%50)/10;
        resp_03.innerText = `Notas de R$ 100: ${quantidadeDeNotasdeCem}`
        resp_02.innerText = `Notas de R$ 50: ${quantidadeDeNotasdeCinquenta}`
        resp_01.innerText = `Notas de R$ 10: ${quantidadeDeNotasdeDez}`
    }
}
        
)
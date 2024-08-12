const frm = document.querySelector('form');
const resp_h3 = document.querySelector('h3');

frm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let numero = Number(frm.inNumero.value);
    let raiz_quadrada = Math.sqrt(numero);

    /*Em JavaScript, você pode usar o método Number.isInteger() para verificar se um valor é um número inteiro. 
    Este método retorna um valor booleano: true se o valor for um inteiro e false caso contrário.*/
    
    if(Number.isInteger(raiz_quadrada)){
        resp_h3.innerText = `Raiz: ${raiz_quadrada}`
    }else{
        resp_h3.innerText = `O número: ${numero} não possui raiz quadrada.`
    }
})
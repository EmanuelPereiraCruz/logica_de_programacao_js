let frm = document.querySelector('form')
let resp = document.querySelector('h3')

frm.addEventListener('submit',(e)=>{
    let nome = frm.inNome.value;
    resp.innerText = `Olá, ${nome}.`
    e.preventDefault()
}
)
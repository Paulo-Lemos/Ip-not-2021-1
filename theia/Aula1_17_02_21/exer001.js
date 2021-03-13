var a = document.querySelector('#saudar')
a.addEventListener('click',mensagem)
 


function mensagem(){
    let nome=window.prompt('Qual o seu nome?')
    a.style.background='green'
    a.innerHTML=`Olá
     ${nome}, seja bem vindo a aula de linguagem de programação`


 }

const corpo  = document.querySelectorAll('body')[0];
const h1     = document.getElementById('page-title');
const botao  = document.getElementById('mode-selector');
const rodape = document.getElementsByTagName("footer")[0];
function mudaModo(){
    mudaClass();
    mudaText();
   
}
function mudaClass(){
    botao.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    rodape.classList.toggle('dark-mode');
    corpo.classList.toggle('dark-mode');
}
function  mudaText(){
    if(corpo.classList.contains('dark-mode')){
        botao.innerHTML = 'Light Mode';
        h1.innerHTML = ' Dark mode ON';
        return;
    }
    botao.innerHTML = 'Dark Mode';
    h1.innerHTML = ' Ligth mode ON';
}
botao.addEventListener('click', mudaModo)

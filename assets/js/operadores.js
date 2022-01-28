var num1  = document.getElementById('num1');
var num2  = document.getElementById('num2');
var texto = document.getElementById('resultado');
console.log(num1).value;
console.log(num2);



function juncao(){

    let  igual = Number( num1.value) == Number(num2.value) ? "São" : "Nao" ;

    let   soma = Number(num1.value)  + Number(num2.value) ;
    let  maior = soma > 10  ? "maior" : "menor "; 
    let  maior2 = soma < 20  ? " menor " : " maior "; 

    let  resultado = `Os números ${ num1.value} e ${num2.value} ${igual} iguais. Sua soma é ${soma}, que é ${maior} que 10 e ${maior2} que 20`
    texto.innerHTML=resultado;
    return console.log(resultado);

    
}

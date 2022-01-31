var frase = "A base do teto desaba"
let aux = frase.toLowerCase().replace(" ",'');
console.log(aux);
var  palindromo = '';

for(letra of aux){
    palindromo = letra + palindromo ;
}
var resposta =  palindromo == frase ? "é um palidromo" : "Não é um palidromo";
console.log(palindromo);
console.log(resposta);

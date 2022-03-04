// usando  o argumento thisArg
const obj = {
    value : 2,
}
// 000000000
const x = [1,2,3,4,5,6,7,8,9];

const y = x.map((x) => x * 2);

const z = y.filter((x) => x % 2 == 0 )
const aux = [2,3,4]
// Reduce
function SomaNumeros(arr){
    return arr.reduce(function(anterior, atual){
        console.log({anterior});
        console.log({atual});
        return anterior + atual;
    });
}
/// função lista 
const lista = [{name: 'sabao', preco: 30}, {name: 'ceral', preco: 12},{name: 'shampo', preco: 25}];
const saldo  = 90;
function pagandoCompra(saldo, arr){
    var i = 0;
    
    return arr.reduce(function(prev, atual){
        console.log(i++)
        return prev - atual.preco;
    }, saldo)
}
console.log(pagandoCompra(saldo,lista));
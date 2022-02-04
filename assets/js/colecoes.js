var  map = new Map();
var admins = [];
map.set('joao', 'admin' );
map.set('thiago','admin')
map.set('Paulo','aluno')
map.set('gustavo','professor');
function getAdimins(map){
    for([key,value]of map){
        console.log(key);
        if(value == 'admin'){
            admins.push(key);
        }
    }
    return admins;
}
console.log(getAdimins(map));


// set

var array  =[30, 30, 40, 5, 223, 2049, 3034, 5]
var valoreU = [];

function valoresU(arr){
    const set = new Set(arr);
    return [...set];
}
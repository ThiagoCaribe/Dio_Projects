function  NumPares( array){
    let  x = [];
    for(var n = 0;n <array.length; n++){
        if(array[n] % 2 == 0 ){
            x.push(array[n]);
        }
    }
    return x;
}

let array = [1,2,3,4,5,8,6];

var x = document.getElementById('contador')
console.log(x)
var currentNumber = 0;
function incremment(){
        currentNumber = currentNumber + 1 ;
        if(x >10){
            alert("nao permitido");
        }else{
            x.innerHTML = currentNumber;
        }
}
function decremment(){
    currentNumber -= 1 ;   
    console.log(currentNumber);
    x.innerHTML = currentNumber;
}

function addTask(){
    var tarefa = document.getElementById('tarefas')
    
}
const MeuErro =  new Error();

function soma(arr, num){
   try{
    if(!arr && !num) throw new ReferenceError("envie os parametros");
    if(typeof arr  !== 'object') throw new TypeError("O array precisa ser do tipo object");
    if(typeof num  !== 'number') throw new TypeError("O numero enviado nao é do tipo number");
    if(arr.length !== num) throw new RangeError("O tamanho da array é invalido");
     return arr;
   }catch(e){
       if(e instanceof ReferenceError) {
           console.log("O erro é um reference error")
           throw(e.message)
       }else if(e instanceof TypeError){
        console.log("O erro é um Type error")
        throw(e.message)
       }else if(e instanceof RangeError){
        console.log("O erro é um reanger error")
        throw(e.message)
       }else{
           console.log("erro nao esperado");
           throw(e.message);
       }
   }
   
}
var arr = ['a'];
 
console.log(soma(arr, 1));
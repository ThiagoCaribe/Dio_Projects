var array = [1, 3, 4, 6, 80, 33, 23, 90];

for(i = 0; i < array.length; i++){
    if(array == undefined || array == '' || array == null ){
        array = -1;
    }
    if(array[i] % 2 == 0){
        array[i]=0;
    }
}
console.log(array);
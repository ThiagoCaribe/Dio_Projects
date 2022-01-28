function calc(){
    const operacao = prompt("escolha uma operaçao:\n 1-soma\n 2-subtração \n 3-multiplicação \n 4-divsão");
    let n1 = Number(prompt("informe o primeiro valor"));
    let n2 = Number(prompt("informe o segundo valor"));
    let resul ;
    function soma(n1,n2){
        resul =( n1  +   n2);
        alert(`${n1} + ${n2} é igual a ${resul}`);
    }
    function sub(n1,n2){
        resul = n1 - n2;
        alert(`${n1} - ${n2} é igual a ${resul}`);
    }
    function mult(n1,n2){
        resul = n1 * n2;
        alert(`${n1} * ${n2} é igual a ${resul}`);
    }
    function div(n1,n2){
        resul = n1 / n2; 
        alert(`${n1} /s ${n2} é igual a ${resul}`);
    }
    switch(operacao > 0){
        case operacao == 1:
            soma(n1,n2)
            break;
        case operacao == 2:
            sub(n1,n2)
            break;
        case operacao == 3:
            mult(n1,n2)
            break;
        case operacao ==4:
            div(n1,n2)
            break;
    }
}

calc();
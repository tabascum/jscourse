//função que usa dois números e devolve o maior dentre eles

let higherVal = max(4,9);
console.log(higherVal);


function max(number1,number2) {
    if(number1 > number2)
        return number1;
    else return number2; // a expressão else pode ser eliminada
}


function max(number1, number2) {
    return number1 > number2 ? number1 : number2;
}


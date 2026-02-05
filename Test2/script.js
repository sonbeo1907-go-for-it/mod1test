let number1 ='';
let number2 ='';

function initializeNumber1(){
    do{
        input = prompt("Nhap so thu nhat: ");
        number1 = Number(input);
    } while (!Number.isInteger(number1))
}

function initializeNumber2(){
    do{
        input = prompt("Nhap so thu hai: ");
        number2 = Number(input);
    } while (!Number.isInteger(number2))
}

function calculate(number){
    sum = 0;
    for (i=0; i< i/2; i++){
        if (number % i === 0){
            sum +=i;
        }
    }
    return sum;
}

function handler(){
    if (number1 === number2) return false;
    return calculate(number1) === calculate(number2);
}

function display(){
    alert(handler());
}

initializeNumber1();
initializeNumber2();
display();
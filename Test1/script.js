let array = [];
let n = '';

function initialize(){
    do{
        input = prompt("Nhap so phan tu cua mang (So phan tu mang phai lon hon 0, nho hon 50 va la so nguyen)");
        n = Number(input);
    } while ((n< 0) || (n>50) || !Number.isInteger(n))
}

function addToArray(){
    array = [];
    for (i=0; i < n; i++){
        do{
            value = prompt(`Nhap phan tu thu ${i+1}`);
            array[i] = Number(value);
        } while (!Number.isInteger(array[i]));
    }
}

function displayData(){
    document.getElementById("displayArray").innerText= `[${array.join(", ")}]`;
}

function calculate(){
    let sum =0;
    let count = 0;
    for (let i = 0; i< array.length; i = i+2 ){
        if (array[i] %2 !== 0){
            sum += array[i];
            count++;
        }
    }
    document.getElementById("displayResult").innerText = sum / count;
}

initialize();
addToArray();
displayData();
calculate();
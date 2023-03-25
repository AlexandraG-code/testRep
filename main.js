'use srtict'
// ************области видимости переменных

function doSomething() {
    var myVar = 1;
    if (true) {
        var myVar = 2;
        console.log(myVar);
    }
    console.log(myVar);
}

doSomething();


function getInfo() {
    let myLet = 1;
    if (true) {
        let myLet = 2;
        console.log(myLet);
    }
    console.log(myLet);
}

getInfo()

let arr = [1, 2, 3, 4];
var arrString = ['one', 'two', 'three'];

console.log(window.arr)
console.log(window.arrString)

// Числа**************
// Ошибка округления
let num1 = 3
let num2 = 4.1 - 1.1
console.log(num2)
console.log(num1 === num2)
console.log(num1 === Math.round(num2))


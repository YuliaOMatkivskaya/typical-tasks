"use scrict";

let str = prompt ("Введите число","5");

let num = Number(str);

let num1 = Math.sqrt(5*num*num - 4);
let num2 = Math.sqrt(5*num*num + 4);

console.log(num);
console.log(num1);
console.log(num2);

let one = Number.isInteger(num1);
let two = Number.isInteger(num2);

if (one==true||two==true) {
        alert ("Вы ввели число, входящее в числа Фибоначчи");
        } else {
        alert ("Вы ввели число, не входящее в числа Фибоначчи");
        }

// не работает для чисел больше 1e15, для любых таких чисел выходит, что введено число Фибоначчи


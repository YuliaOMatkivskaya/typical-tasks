"use scrict";

let str = prompt ("Введите число","5");
let num = Number (str);

alert (num);

let num1 = 0;
let num2 = 1;

console.log(num1);
console.log(num2);

let n = 1000;

for (let i = 1; i <= n; i++) {
	let num3 = num1 + num2;
	
	num1 = num2;
	num2 = num3;
    if (num==num1||num==num2||num==num3||num==0) {
        alert ("Вы ввели число, входящее в числа Фибоначчи");
        break;
    } else if (num3 > num) {
        alert ("Вы ввели число, не входящее в числа Фибоначчи");
        break;
    } else if (i == n) {
        alert ("Вы ввели очень большое число, проверить на принадлежность к числам Фибоначчи не получится");
        break;
    }
	console.log(num3);
}
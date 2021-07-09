'use strict';

let str = prompt ("Введите здесь любую фразу", "Иди, Сеня, не сиди!");

str=str.toUpperCase().replace(/[\s , ! - \?]/g, '');


if (str===str.split('').reverse().join('')){
    alert("Вы ввели палиндром");
} else {
    alert("Вы ввели не палиндром");
}

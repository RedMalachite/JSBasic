// let num = prompt("Fizz & Bizz. Введите число:");
// if (num % 3 == 0 && num % 5 != 0) console.log("Fizz");
// if (num % 5 == 0 && num % 3 != 0) console.log("Bizz");
// if (num % 5 == 0 && num % 3 == 0) {
//     console.log("FizzBizz");
// } else console.log("No FizzBizz");

// let year = prompt("Высокосный год?");
// if (year % 4 === 0 && !(year % 100 === 0 && year % 400 !== 0)) {
//     console.log(year + ' - это высокосный год');
// } else console.log(year + ' - это НЕ высокосный год');

// let age = prompt("Возраст");
// let lastNum = Number(age[age.length - 1]);
// switch (lastNum) {
//     case 2:
//     case 3:
//     case 4: console.log(`Вам ${age} года`);
//     break;
//     case 1: console.log(`Вам ${age} год`);
//     break;
//     default: console.log(`Вам ${age} лет`);
// }


// let num = prompt("Простое или сложное число. Введите число больше 1:");
// for (let i = 2; i <= num; i++) {
//
//     if (num % i === 0 && i < num / 2 + 1) {
//         console.log(num + " - число сложное");
//         break;
//     }
//     if (i >= num / 2 + 1){
//         console.log(num + " - число простое");
//         break;
//     }
// }


// let num = (Number(prompt("Поиск совершенных чисел")));
// let sum = 0;
// for (let i = 1; i <= num; i++) { // итеррация чисел от 1 до N
//     sum = 0;
//     for (let j = 1; j <= i / 2; j++) { // проверка текущего числа N на совершенство
//         if (i % j === 0) {
//             sum += j;
//             if (j === i / 2 && sum === i) console.log(i + ': совершенное число');
//         }
//     }
// }


let star = '*';
let tree = '';
let height = Number(prompt("Высота елки"));
for (let i = 0; i < height; i++) {

 for(let j = 1; j < i + 1; j++){
     // console.log(j);
     tree += star;
     console.log(tree.length, tree);
 }
}


// if(height % 2 === 0) {
//     console.log(height * 2 - 1);
// } else {
//     console.log(height * 2);
// }

// let star = '*';
// for(let i = 1; i <= height; i++){
//     console.log (`${star}
//     ${star}`);
// }


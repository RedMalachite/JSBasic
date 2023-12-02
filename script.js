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

let num = (Number(prompt("Поиск совершенных чисел")));
let sum = 0;

for (let i = 0; i < num; i++) {
    console.log(i);

    for (let j = 1; j <= num / 2; j++) {
        if (num % j === 0) {
            sum += j;
        }
    }
    if (sum === num) console.log(num + ': совершенное число');

}



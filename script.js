// let str = prompt('Введите строку:');
// let reverseStr = '';
// function reverseString(str) {
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverseStr += str[i];
//     }
//     return reverseStr;
// }
// console.log(reverseString(str));


// let str = prompt('Введите строку:', 'Учуя молоко, я около мяучу');
// function isPalindrome(str) {
//     let result = new String();
//     for (let i = 0; i <= str.length - 1; i++) {
//         switch (str[i]) { // убираем лишние знаки в предложении
//             case ' ':
//             case '.':
//             case ',':
//             case '-':
//                 continue;
//         }
//         result += str[i].toLowerCase();
//     }
//     let reverseResult = new String();
//     for (let i = result.length - 1; i >= 0; i--) {
//         reverseResult += result[i];
//     }
//     if (result === reverseResult) return 'Палиндром';
//     return "Не палиндром";
// }
// console.log(isPalindrome(str));

// let firstNum = parseInt(prompt("Введите первое число"));
// let secondNum = parseInt(prompt("Введите второе число"));
// function findGCD(firstNum, secondNum) {
//     let result = new String();
//     for (let i = 1; i <= Math.min(firstNum, secondNum); i++) {
//         if (firstNum % i === 0 && secondNum % i === 0) result = i;
//     }
//     return result;
// }
// console.log(findGCD(firstNum, secondNum));
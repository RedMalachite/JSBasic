// const randomDelayPrint = () => {
//     const phrase = prompt('Enter a phrase:', 'Hello, World!');
//     let step = 0;
//     function printNextSymbol() {
//         if (step < phrase.length) {
//             const randomInterval = Math.round(Math.random() * 1000);
//             console.log(`${phrase[step]} - next symbol print will start in ${randomInterval} milliseconds`);
//             step++;
//             setTimeout(printNextSymbol, randomInterval);
//         } else return console.log('End');
//     }
//     setTimeout(printNextSymbol, Math.round(Math.random() * 1000));
//     console.log('Start');
// }
// randomDelayPrint();





// let a = prompt("1-st number", "15");
// let b = prompt("2-nd number", "5");
// let arr = [
//     function plus(a, b) {
//         console.log(+a + +b);
//         return +a + +b;
//     },
//     function minus(a, b) {
//         console.log(a - b);
//         return a - b;
//     },
//     function multiplication(a, b) {
//         console.log(a * b);
//         return a * b;
//     },
//     function dividing(a, b) {
//         console.log(a / b);
//         return a / b;
//     }
// ];
// let timer = 1500;
// const intervalRace = (arr, timer) => {
//     let step = 0;
//     let results = [];
//     const start = () => {
//         if (step < arr.length) {
//             results.push(arr[step](a, b));
//             step++;
//             setTimeout(start, timer);
//         } else {
//             console.log(results);
//         }
//     };
//     start();
// };
// intervalRace(arr, timer);




// function debounce(callback, timer) {
//     let timerId;
//     let isFirstCall = true;
//     return function() {
//         if (isFirstCall) {
//             callback.apply(this);
//             isFirstCall = false;
//         } else {
//             clearTimeout(timerId);
//         }
//
//         timerId = setTimeout(function() {
//             isFirstCall = true;
//         }, timer);
//     };
// }
//
// function myFunction() {
//     console.log('Function result');
// }
// const debouncedExpensiveOperation = debounce(myFunction, 1000);
// console.log("1-st call");
// debouncedExpensiveOperation();
// console.log("2-nd call");
// debouncedExpensiveOperation();
// console.log("3-rd call");
// debouncedExpensiveOperation();
// setTimeout(function() {
//     debouncedExpensiveOperation();
// }, 1500);
// console.log("4-th call");
// debouncedExpensiveOperation();

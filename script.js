// let num = prompt('Fibonacci numbers from 0 to:', '10');
// let currentResult;
// function* fibonacci(num) {
//     let a = 0;
//     let b = 1;
//     while (a <= num) {
//         yield a;
//         [a, b] = [b, a + b];
//     }
// }
// const fibGen = fibonacci(num);
//
// console.log(fibGen.next().value);
// console.log(fibGen.next().value);
// console.log(fibGen.next().value);
// console.log(fibGen.next().value);
// console.log(fibGen.next().value);
// console.log(fibGen.next().value);
// console.log(fibGen.next().value);
// console.log(fibGen.next().value);





// async function* generator(promises) {
//     for (const promise of promises) {
//             const result = await promise;
//             yield result;
//     }
// }
// const promises = [
//     new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
//     new Promise((resolve) => setTimeout(() => resolve('2'), 500)),
//     new Promise((resolve) => setTimeout(() => resolve(4), 3000)),
//     new Promise((resolve) => setTimeout(() => resolve(3), 1500)),
// ];
//
// (async () => {
//     const resultGen = generator(promises);
//     for await (const result of resultGen) {
//         console.log(result);
//     }
// })();




// function* flatten(numArr) {
//     for (const element of numArr) {
//         if (Array.isArray(element)) {
//             yield* flatten(element);
//         } else {
//             yield element;
//         }
//     }
// }
//
// const numArr = [1, [2, 3], [4, 5, [6, 7]], 2, [10, -4]];
// const gen = flatten(numArr);
// console.log([...gen]);

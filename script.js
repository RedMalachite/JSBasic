// let userNum1 = parseInt(prompt("Первое число"));
// let userNum2 = parseInt(prompt("Второе число"));
// let summarize = (num1) => {
//     return function (num2) {
//         num2 || num2 === 0 ? console.log(num1 + num2) : console.log(++num1);
//     }
// }
// summarize(userNum1)(userNum2);


// function counter(startValue, step) {
//     let currentValue = startValue;
//
//     function increment() {
//         currentValue += step;
//         console.log(currentValue);
//     }
//
//     function decrement() {
//         currentValue -= step;
//         console.log(currentValue);
//     }
//
//     function reset() {
//         currentValue = startValue;
//         console.log(currentValue, step);
//     }
//
//     return {
//         increment,
//         decrement,
//         reset
//     };
// }
//
// const myCounter = counter(10, 3);
//
// myCounter.increment();
// myCounter.increment();
// myCounter.increment();
// myCounter.decrement();
// myCounter.decrement();
// myCounter.reset();
// myCounter.increment();




// let lastResult; // замыкание на этой переменной
// function sequence(multiplication, summation) {
//     if (lastResult || lastResult === 0) console.log(`Последний результат ${lastResult}`);
//     console.log(`Функция sequence возвращает значение ${multiplication - summation}`);
//     return lastResult = multiplication - summation;
// }
// function multiplication(a) {
//     return a * a;
// }
// function summation(a) {
//     return a + a;
// }
// sequence(multiplication(5), summation(5));
// sequence(multiplication(10), summation(5));
// sequence(multiplication(10), summation(25));
// sequence(multiplication(1), summation(1));
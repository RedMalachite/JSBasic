// const randomDelayPrint = () => {
//     const phrase = prompt('Введите строку:', 'Hello, World!');
//     let step = 0;
//
//     function printNextSymbol() {
//         if (step < phrase.length) {
//             const randomInterval = Math.round(Math.random() * 1000);
//             console.log(`${phrase[step]} - next symbol print will start in ${randomInterval} milliseconds`);
//             step++;
//             setTimeout(printNextSymbol, randomInterval);
//         } else return console.log('End');
//     }
//
//     setTimeout(printNextSymbol, Math.round(Math.random() * 1000));
//     console.log('Start');
// }
// randomDelayPrint();


let arr = [
    function plus(a, b) {
        return console.log(a + b);
    },
    function minus(a, b) {
        return console.log(a - b);
    },
    function multiplication(a, b) {
        return console.log(a * b);
    },
    function dividing(a, b) {
        return console.log(a / b);
    }
]
let timer = 1500;
const intervalRace = (arr, timer) => {
    let step = 0;

    const start = () => {
        if (step < arr.length) {
            arr[step](6, 4);
            step++;
        } else {
            clearInterval(timer);
        }
    };
    start();
    setInterval(start, timer);
}
intervalRace(arr, timer);

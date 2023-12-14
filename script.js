// let arr = ['string', true, Infinity, 6, NaN];
// let currentVal = (value) => value;
// let decor = (func) => {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(func(arr[i]));
//     }
// }
// let result = decor(currentVal);

// let arr = [10, 3, 15, 7, 5, 6, 60];
// let check = (arr) => arr % 5;
// let decor = (func, validator) => {
//     for (let i = 0; i < arr.length; i++) {
//         try {
//             if (func(arr[i]) === validator) {
//                 console.log(`Число ${arr[i]} делится на 5 без остатка.`);
//             } else {
//                 throw new Error(`Число ${arr[i]} НЕ делится на 5 без остатка.`);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }
// let result = decor(check, 0);

let arr = [4, '3', 8, [1, 2], 5, 'string', 110];
let check = (elem) => typeof (elem);
let decor = (func, maxAttempts) => {
    let lastNumber = null;
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) == 'number'){
            lastNumber = arr[i];
            // console.log(`Значение массива ${arr[i]} - ${func(arr[i])}`);
        }
    }

    console.log(lastNumber);
}
let result = decor (check, 3);
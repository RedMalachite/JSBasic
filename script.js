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
//             // Можно добавить код обработки ошибок здесь
//         }
//     }
// }
// let result = decor(check, 0);



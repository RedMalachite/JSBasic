// let arr = ['string', true, Infinity, 6, NaN];
// let currentVal = (value) => value;
// let decor = (func) => {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(func(arr[i]));
//     }
// }
// let result = decor(currentVal);



// let arr = [10, 3, 15, 7, 5, 6, 60, 20];
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



// // Код перебирает массив в поисках числовых типов данных и логирует сообщение об успешном выполнении.
// // В случае maxAttempts ошибок логируется error-сообщение и выводится последнее числовое значение.
// let arr = [4, '3', 8, [1, 2], 5.5, 'string', 110];
// let check = (elem) => typeof (elem);
// let decor = (func, maxAttempts) => {
//     let lastNumber = null;
//     let attempt = null;
//     for (let i = 0; i < arr.length; i++) {
//         try {
//             if (func(arr[i]) == 'number') {
//                 lastNumber = arr[i];
//             } else attempt++;
//             if (attempt === maxAttempts) {
//                 throw new Error(`Достигнуто максимальное количество ошибок. Последнее корректное значение: ${lastNumber}`)
//             }
//         } catch (error) {
//             console.log(error);
//             break;
//         }
//     }
//     if (attempt < maxAttempts) console.log(`Массив перебран без ошибок или с ошибками с количеством меньше позволенного: ${maxAttempts}`);
// }
// let result = decor(check, 3);
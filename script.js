// function searchNums(a, b) {
//     const nextNumber = a + b;
//
//     if (nextNumber <= userNumber) {
//         console.log(nextNumber);
//         searchNums(b, nextNumber);
//     }
// }
// let userNumber = prompt("All Fibonacci numbers from 1 to:", "1000");
// searchNums(0, 1);




// function uniqueArrs(arr, startVal = 0) {
//     if (startVal === arr.length - 1) {
//         console.log(arr);
//     } else {
//         for (let i = startVal; i < arr.length; i++) {
//             [arr[startVal], arr[i]] = [arr[i], arr[startVal]];
//             uniqueArrs(arr, startVal + 1);
//             [arr[startVal], arr[i]] = [arr[i], arr[startVal]];
//         }
//     }
// }
// let nums = [
//     Math.floor(Math.random() * 9) + 1,
//     Math.floor(Math.random() * 10) + 10,
//     Math.floor(Math.random() * 10) + 20
// ];
// uniqueArrs(nums);


let userNum = prompt("Enter an integer", "196");
let step = 0;
let start = performance.now();
function searchPalindrome(userNum) {
    const reversedNum = userNum.split('').reverse().join('');
    if (userNum == reversedNum) {
        let result = [userNum, step];
        console.log(`Palindrome is found: ${userNum}. Number of summation steps: ${step}\n Returning object is here: `, result);
        return result;
    } else {
        step++;
        let numResult = +userNum + +reversedNum;
        let str = numResult.toString();
        let end = performance.now();
        let exec = end - start;
        console.log(exec);
        if (exec >= 500) {
            console.log("return instruction");
            return;
        }
        searchPalindrome(str);
    }
}
searchPalindrome(userNum);


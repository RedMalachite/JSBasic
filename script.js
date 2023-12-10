const originalArray = [1, 2, 3, 4, 5];
function reverseArray(originalArray){
    return originalArray.reverse();
}
const reversedArray = reverseArray(originalArray);
console.log(reversedArray);


const students = [
    {name: "Alice", age: 20, grade: 4.5},
    {name: "Bob", age: 21, grade: 3.9},
    {name: "Charlie", age: 19, grade: 4.8}
];
function calculateAverageGrade(students) {
    let average = new Number();
    for (let i = 0; i < students.length; i++) {
        average += students[i].grade;
    }
    average = average / students.length;
    return average.toFixed(1);
}
console.log(calculateAverageGrade(students));


const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
function uniqueValues(array1, array2){
   let newArray = array1.concat(array2);
   newArray = [...new Set(newArray)];
   return newArray;
}
const uniqueValuesArray = uniqueValues(array1, array2);
console.log(uniqueValuesArray);
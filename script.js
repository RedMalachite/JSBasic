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
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


// let course = {
//     courseName: 'JS Basic',
// }
// let person = {
//     fName: "Andriy",
// }
// let age={
//     personAge: 26
// }
// person = Object.setPrototypeOf(course, person);
// console.log(person.fName, person.courseName)


// function Student(firstName, secondName, birthYear, grade, visits, course) {
//     this.firstName = firstName;
//     this.secondName = secondName;
//     this.birthYear = birthYear;
//     this.grade = grade;
//     this.visits = visits;
//     this.course = course;
//     this.addGrade = function (newGrade) {
//         this.grade.push(newGrade);
//         console.log(`Grade ${newGrade} is added.
//         Student's grades are ${this.grade}`);
//     };
//     this.getAverageGrade = function () {
//         let sum = this.grade.reduce(function (accumulator, currentValue) {
//             return (accumulator + currentValue);
//         }, 0);
//         return `Average grade is ${Math.round(sum / this.grade.length)}`;
//     };
//     this.addVisit = function () {
//         let visit = Boolean(prompt(`Enter smth - student visited a lesson. Line empty - student missed a lesson`));
//         this.visits.push(visit);
//         if (visit) {
//             console.log('Student visited a lesson');
//         } else {
//             console.log('Student missed a lesson')
//         }
//     }
//     this.averageStudentsVisits = function () {
//         let trueCount = 0;
//
//         this.visits.forEach(function (value) {
//             if (value === true) {
//                 trueCount++;
//             }
//         });
//         let averageVisits = 100 / this.visits.length * trueCount;
//         console.log(`Student's visits: ${trueCount} of ${this.visits.length} lessons. Average visits: ${Math.round(averageVisits)}%`);
//     };
//     this.lessons = function () {
//         console.log(`Completed  lessons: ${this.visits.length}`);
//     }
//     this.changeCourse = function (){
//         let newCourse = prompt("New course", "Typescript");
//         this.grade = [];
//         this.visits = [];
//         this.course = newCourse;
//         // console.log(student);
//     }
// }
//
// let student = new Student('Andriy', 'Bondarenko', 1981, [100, 50, 0], [true, true, false], 'JS Basic');
// for (; ;) {
//     let choice = prompt(`Choose action:
// 1) Average student grade
// 2) Add grade
// 3) Add visits
// 4) Average student's visits
// 5) Completed lessons
// 6) Change course
// 7) Full course data
// 9) Exit`);
//     if (choice == 9) break;
//     switch (choice) {
//         case '1':
//             console.log(student.getAverageGrade());
//             break;
//         case '2':
//             let newGrade = Number(prompt("New students grade"));
//             // console.log(student.addGrade(newGrade));
//             student.addGrade(newGrade);
//             break;
//         case '3':
//             student.addVisit();
//             break;
//         case '4':
//             student.averageStudentsVisits();
//             break;
//         case '5':
//             student.lessons();
//             break;
//         case '6':
//             student.changeCourse();
//             break;
//         case '7':
//             console.log(student);
//     }
// }






function Student(firstName, secondName, birthYear, courses) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.birthYear = birthYear;
    this.courses = courses || [];

    this.addGrade = function (courseName, newGrade) {
        const course = this.findCourse(courseName);
        if (course) {
            course.grades.push(newGrade);
            console.log(`Grade ${newGrade} is added to ${courseName}.
            ${this.getGradesInfo(courseName)}`);
        } else {
            console.log(`Student is not enrolled in the course ${courseName}`);
        }
    };

    this.getAverageGrade = function (courseName) {
        const course = this.findCourse(courseName);
        if (course) {
            let sum = course.grades.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue;
            }, 0);
            return `Average grade for ${courseName} is ${Math.round(sum / course.grades.length)}`;
        } else {
            return `Student is not enrolled in the course ${courseName}`;
        }
    };

    this.addVisit = function (courseName) {
        const course = this.findCourse(courseName);
        if (course) {
            let visit = Boolean(prompt(`Enter something - student visited a lesson. Line empty - student missed a lesson`));
            course.visits.push(visit);
            if (visit) {
                console.log(`Student visited a lesson in ${courseName}`);
            } else {
                console.log(`Student missed a lesson in ${courseName}`);
            }
        } else {
            console.log(`Student is not enrolled in the course ${courseName}`);
        }
    };

    this.averageStudentsVisits = function (courseName) {
        const course = this.findCourse(courseName);
        if (course) {
            let trueCount = course.visits.reduce(function (accumulator, value) {
                return accumulator + (value === true ? 1 : 0);
            }, 0);
            let averageVisits = (trueCount / course.visits.length) * 100;
            return `Student's visits for ${courseName}: ${trueCount} of ${course.visits.length} lessons. Average visits: ${Math.round(averageVisits)}%`;
        } else {
            return `Student is not enrolled in the course ${courseName}`;
        }
    };

    this.lessons = function (courseName) {
        const course = this.findCourse(courseName);
        if (course) {
            console.log(`Completed lessons for ${courseName}: ${course.visits.length}`);
        } else {
            console.log(`Student is not enrolled in the course ${courseName}`);
        }
    };

    this.changeCourse = function () {
        let newCourseName = prompt("Enter the name of the new course", "Typescript");
        let newCourse = this.findCourse(newCourseName);
        if (!newCourse) {
            newCourse = {
                name: newCourseName,
                grades: [],
                visits: []
            };
            this.courses.push(newCourse);
        }
        this.currentCourse = newCourse;
        console.log(`Student is now enrolled in the course: ${newCourseName}`);
    };

    this.deleteCourse = function (courseName) {
        const index = this.courses.findIndex(course => course.name === courseName);
        if (index !== -1) {
            this.courses.splice(index, 1);
            console.log(`Course ${courseName} is deleted.`);
        } else {
            console.log(`Student is not enrolled in the course ${courseName}`);
        }
    };

    this.findCourse = function (courseName) {
        return this.courses.find(course => course.name === courseName);
    };

    this.getGradesInfo = function (courseName) {
        const course = this.findCourse(courseName);
        if (course) {
            return `Grades for ${courseName}: ${course.grades.join(', ')}`;
        } else {
            return `Student is not enrolled in the course ${courseName}`;
        }
    };

    this.getCourseInfo = function (courseName) {
        const course = this.findCourse(courseName);
        if (course) {
            const averageGrade = this.getAverageGrade(courseName);
            const averageVisits = this.averageStudentsVisits(courseName);

            console.log(`Course Info for ${courseName}:
            - Grades: ${course.grades.join(', ')}
            - Visits: ${course.visits.map(visit => visit ? 'Visited' : 'Missed').join(', ')}
            - ${averageGrade}
            - ${averageVisits}`);
        } else {
            console.log(`Student is not enrolled in the course ${courseName}`);
        }
    };
}

let student = new Student('Andriy', 'Bondarenko', 1981);

for (;;) {
    let choice = prompt(`Choose action:
1) Average student grade
2) Add grade
3) Add visits
4) Average student's visits
5) Completed lessons
6) Change course
7) Course info
8) Delete course
9) Exit`);

    if (choice == 9) break;

    switch (choice) {
        case '1':
            let courseForAverageGrade = prompt("Enter the course name");
            console.log(student.getAverageGrade(courseForAverageGrade));
            break;
        case '2':
            let courseForAddGrade = prompt("Enter the course name");
            let newGrade = Number(prompt("New student's grade"));
            student.addGrade(courseForAddGrade, newGrade);
            break;
        case '3':
            let courseForAddVisit = prompt("Enter the course name");
            student.addVisit(courseForAddVisit);
            break;
        case '4':
            let courseForAverageVisits = prompt("Enter the course name");
            console.log(student.averageStudentsVisits(courseForAverageVisits));
            break;
        case '5':
            let courseForLessons = prompt("Enter the course name");
            student.lessons(courseForLessons);
            break;
        case '6':
            student.changeCourse();
            break;
        case '7':
            let courseForInfo = prompt("Enter the course name");
            student.getCourseInfo(courseForInfo);
            break;
        case '8':
            let courseForDelete = prompt("Enter the course name to delete");
            student.deleteCourse(courseForDelete);
            break;
    }
}



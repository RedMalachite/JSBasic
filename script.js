// function Student(firstName, secondName, birthYear, courses) {
//     this.firstName = firstName;
//     this.secondName = secondName;
//     this.birthYear = birthYear;
//     this.courses = courses || [];
// }
//
// Student.prototype = {
//     addGrade: function(courseName, newGrade) {
//         const course = this.findCourse(courseName);
//         if (course) {
//             course.grades.push(newGrade);
//             console.log(`Grade ${newGrade} is added to ${courseName}.\n${this.getGradesInfo(courseName)}`);
//         } else {
//             console.log(`Student is not enrolled in the course ${courseName}`);
//         }
//     },
//
//     getAverageGrade: function(courseName) {
//         const course = this.findCourse(courseName);
//         if (course) {
//             let sum = course.grades.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//             return `Average grade for ${courseName} is ${Math.round(sum / course.grades.length)}`;
//         } else {
//             return `Student is not enrolled in the course ${courseName}`;
//         }
//     },
//
//     addVisit: function(courseName) {
//         const course = this.findCourse(courseName);
//         if (course) {
//             let visit = Boolean(prompt(`Enter something - student visited a lesson. Line empty - student missed a lesson`));
//             course.visits.push(visit);
//             if (visit) {
//                 console.log(`Student visited a lesson in ${courseName}`);
//             } else {
//                 console.log(`Student missed a lesson in ${courseName}`);
//             }
//         } else {
//             console.log(`Student is not enrolled in the course ${courseName}`);
//         }
//     },
//
//     averageStudentsVisits: function(courseName) {
//         const course = this.findCourse(courseName);
//         if (course) {
//             let trueCount = course.visits.reduce((accumulator, value) => accumulator + (value === true ? 1 : 0), 0);
//             let averageVisits = (trueCount / course.visits.length) * 100;
//             return `Student's visits for ${courseName}: ${trueCount} of ${course.visits.length} lessons. Average visits: ${Math.round(averageVisits)}%`;
//         } else {
//             return `Student is not enrolled in the course ${courseName}`;
//         }
//     },
//
//     lessons: function(courseName) {
//         const course = this.findCourse(courseName);
//         if (course) {
//             console.log(`Completed lessons for ${courseName}: ${course.visits.length}`);
//         } else {
//             console.log(`Student is not enrolled in the course ${courseName}`);
//         }
//     },
//
//     changeCourse: function() {
//         let newCourseName = prompt("Enter the name of the new course", "JS");
//         let newCourse = this.findCourse(newCourseName);
//         if (!newCourse) {
//             newCourse = {
//                 name: newCourseName,
//                 grades: [],
//                 visits: []
//             };
//             this.courses.push(newCourse);
//         }
//         this.currentCourse = newCourse;
//         console.log(`Student is now enrolled in the course: ${newCourseName}`);
//     },
//
//     deleteCourse: function(courseName) {
//         const index = this.courses.findIndex(course => course.name === courseName);
//         if (index !== -1) {
//             this.courses.splice(index, 1);
//             console.log(`Course ${courseName} is deleted.`);
//         } else {
//             console.log(`Student is not enrolled in the course ${courseName}`);
//         }
//     },
//
//     findCourse: function(courseName) {
//         return this.courses.find(course => course.name === courseName);
//     },
//
//     getGradesInfo: function(courseName) {
//         const course = this.findCourse(courseName);
//         if (course) {
//             return `Grades for ${courseName}: ${course.grades.join(', ')}`;
//         } else {
//             return `Student is not enrolled in the course ${courseName}`;
//         }
//     },
//
//     getCourseInfo: function(courseName) {
//         const course = this.findCourse(courseName);
//         if (course) {
//             const averageGrade = this.getAverageGrade(courseName);
//             const averageVisits = this.averageStudentsVisits(courseName);
//
//             console.log(`Course Info for ${courseName}:
//         - Student: ${this.firstName} ${this.secondName}, Birth Year: ${this.birthYear}
//         - Grades: ${course.grades.join(', ')}
//         - Visits: ${course.visits.map(visit => visit ? 'Visited' : 'Missed').join(', ')}
//         - ${averageGrade}
//         - ${averageVisits}`);
//         } else {
//             console.log(`Student is not enrolled in the course ${courseName}`);
//         }
//     },
// };
//
// // console.log(Student);
//
// let student = [];
// let students = [];
//
// for (;;) {
//     let choice = prompt(`Choose action:
// 1) Add student
// 2) Course
// 3) Add grade
// 4) Average student grade
// 5) Add visits
// 6) Average student's visits
// 7) Completed lessons
// 8) Course info
// 9) Delete course
// 0) Exit`);
//
//     if (choice == 0) break;
//
//     switch (choice) {
//         case '1':
//             let newFirstName = prompt("Enter the first name of the new student");
//             let newSecondName = prompt("Enter the second name of the new student");
//             let newBirthYear = Number(prompt("Enter the birth year of the new student"));
//             student = new Student(newFirstName, newSecondName, newBirthYear);
//             students.push(student);
//             console.log(`New student created: ${newFirstName} ${newSecondName}, Birth Year: ${newBirthYear}`);
//             break;
//         case '2':
//             student.changeCourse();
//             break;
//         case '3':
//             let courseForAddGrade = prompt("Enter the course name");
//             let newGrade = Number(prompt("New student's grade"));
//             student.addGrade(courseForAddGrade, newGrade);
//             break;
//         case '4':
//             let courseForAverageGrade = prompt("Enter the course name");
//             console.log(student.getAverageGrade(courseForAverageGrade));
//             break;
//         case '5':
//             let courseForAddVisit = prompt("Enter the course name");
//             student.addVisit(courseForAddVisit);
//             break;
//         case '6':
//             let courseForAverageVisits = prompt("Enter the course name");
//             console.log(student.averageStudentsVisits(courseForAverageVisits));
//             break;
//         case '7':
//             let courseForLessons = prompt("Enter the course name");
//             student.lessons(courseForLessons);
//             break;
//         case '8':
//             let courseForInfo = prompt("Enter the course name");
//             student.getCourseInfo(courseForInfo);
//             break;
//         case '9':
//             let courseForDelete = prompt("Enter the course name to delete");
//             student.deleteCourse(courseForDelete);
//             break;
//     }
// }


function Group() {
    this.students = [];
}

Group.prototype.addStudent = function (student) {
    this.students.push(student);
};

Group.prototype.removeStudent = function (studentName) {
    this.students = this.students.filter(function (student) {
        return student.name !== studentName;
    });
};

Group.prototype.getAverageGrade = function (studentName) {
    const student = this.students.find(student => student.name === studentName);

    if (student) {
        const grades = student.grade;
        if (grades.length > 0) {
            const averageGrade = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
            return averageGrade;
        } else {
            return "No grades available for the student.";
        }
    } else {
        return "Student not found.";
    }
};

Group.prototype.getAttendancePercentage = function (studentName) {
    const student = this.students.find(student => student.name === studentName);

    if (student) {
        const totalClasses = student.visits[0];
        const attendedClasses = student.visits[1];

        if (totalClasses > 0) {
            const attendancePercentage = (attendedClasses / totalClasses) * 100;
            return `${studentName}'s average visits: ${Math.round(attendancePercentage)}%`;
        } else {
            return "No classes attended by the student.";
        }
    } else {
        return "Student not found.";
    }
};

Group.prototype.getAttendanceRanking = function () {
    const sortedStudents = this.students.slice().sort((a, b) => {
        const attendanceA = (a.visits[1] / a.visits[0]) * 100 || 0; // Calculate attendance percentage or default to 0
        const attendanceB = (b.visits[1] / b.visits[0]) * 100 || 0;

        return attendanceB - attendanceA; // Sort in descending order
    });

    sortedStudents.forEach(student => {
        const attendancePercentage = ((student.visits[1] / student.visits[0]) * 100 || 0).toFixed(2);
        console.log(`${student.name}: ${attendancePercentage}%`);
    });
};

Group.prototype.getGradeRanking = function () {
    const sortedStudents = this.students.slice().sort((a, b) => {
        const averageGradeA = a.grade.reduce((sum, grade) => sum + grade, 0) / a.grade.length || 0; // Calculate average grade or default to 0
        const averageGradeB = b.grade.reduce((sum, grade) => sum + grade, 0) / b.grade.length || 0;

        return averageGradeB - averageGradeA; // Sort in descending order
    });

    sortedStudents.forEach(student => {
        const averageGrade = (student.grade.reduce((sum, grade) => sum + grade, 0) / student.grade.length || 0).toFixed(2);
        console.log(`${student.name}: ${Math.round(parseInt(averageGrade))}`);
    });
};

let group = new Group();

group.addStudent({name: `Andriy`, visits: [3, 3], grade: [100, 100, 70]});
group.addStudent({name: `Sergiy`, visits: [3 , 0], grade: [0, 0, 0]});
group.addStudent({name: `Artemiy`, visits: [3, 2], grade: [0, 90, 60]});
group.addStudent({name: `Valerianka`, visits: [3 , 1], grade: [0, 90, 0]});

console.log(group);

// group.removeStudent('Sergiy');

for (;;) {
    let choice = prompt(`Choose variant:
    1) Delete student
    2) Get average grade
    3) Get attendance percentage
    4) Get attendance ranking
    5) Get grade ranking
    0) Exit`, "1");

    if (choice == 0) break;

    switch (choice) {
        case '1':
            let nameToRemove = prompt(`Student's name to remove:`);
            group.removeStudent(nameToRemove);
            break;

        case '2':
            let nameToAverage = prompt(`Student's name to get average grade:`);
            let averageGradeResult = group.getAverageGrade(nameToAverage);
            console.log(averageGradeResult);
            break;

        case '3':
            let nameToAttendance = prompt(`Student's name to get attendance percentage:`);
            let attendanceResult = group.getAttendancePercentage(nameToAttendance);
            console.log(attendanceResult);
            break;

        case '4':
            group.getAttendanceRanking();
            break;

        case '5':
            group.getGradeRanking();
            break;
    }
}


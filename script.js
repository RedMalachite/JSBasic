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
        - Student: ${this.firstName} ${this.secondName}, Birth Year: ${this.birthYear}
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
1) Course
2) Add grade
3) Average student grade
4) Add visits
5) Average student's visits
6) Completed lessons
7) Course info
8) Delete course
0) Exit`);

    if (choice == 0) break;

    switch (choice) {
        case '1':
            student.changeCourse();
            break;
        case '2':
            let courseForAddGrade = prompt("Enter the course name");
            let newGrade = Number(prompt("New student's grade"));
            student.addGrade(courseForAddGrade, newGrade);
            break;
        case '3':
            let courseForAverageGrade = prompt("Enter the course name");
            console.log(student.getAverageGrade(courseForAverageGrade));
            break;
        case '4':
            let courseForAddVisit = prompt("Enter the course name");
            student.addVisit(courseForAddVisit);
            break;
        case '5':
            let courseForAverageVisits = prompt("Enter the course name");
            console.log(student.averageStudentsVisits(courseForAverageVisits));
            break;
        case '6':
            let courseForLessons = prompt("Enter the course name");
            student.lessons(courseForLessons);
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

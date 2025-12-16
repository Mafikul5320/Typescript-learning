class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    };

    sleep(hour: number) {
        console.log(`${this.name} sleep ${hour}`)
    }
};

class Student extends Person {
    Class: number;

    constructor(name: string, Class: number) {
        super(name);
        this.Class = Class;
    }
    StudyTime(hour: number) {
        console.log(`${this.name} porasona kore ${hour}`)
    }

}
class Teacher extends Person {
    subject: string;

    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }
    SirReview(review: string) {
        console.log(`${this.name} is  ${review}`)
    }

};

const isStudent = (student: Person) => {
    return student instanceof Student
}
const isTeacher = (student: Person) => {
    return student instanceof Teacher
}


const Students = (user: Person) => {
    if (isStudent(user)) {
        user.StudyTime(5)
    }
    else if (isTeacher(user)) {
        user.SirReview("very Good Teacher")
    }
}

const student1 = new Student("Rohim", 5);
const Teacher1 = new Teacher("Sir", "Bangla");
console.log(student1)

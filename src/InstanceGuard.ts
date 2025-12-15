class Share {
    name: string;

    constructor(name: string) {
        this.name = name;
    };

    sleep(hour: number) {
        console.log(`${this.name} sleep ${hour}`)
    }
};

class Student extends Share {
    Class: number;

    constructor(name: string, Class: number) {
        super(name);
        this.Class = Class;
    }
    StudyTime(hour: number) {
        console.log(`${this.name} porasona kore ${hour}`)
    }

}
class Teacher extends Share {
    subject: string;

    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }
    SirReview(review: string) {
        console.log(`${this.name} is  ${review}`)
    }

};
const Students = (user: Share) => {
    if (user instanceof Student) {
        user.StudyTime(5)
    }
    else if(user instanceof Teacher){
        user.SirReview("very Good Teacher")
    }
}

const student1 = new Student("Rohim", 5);
const Teacher1 = new Teacher("Sir", "Bangla");
console.log(student1)

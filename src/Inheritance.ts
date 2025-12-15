class share {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}



class students extends share {
    Class: number;
    constructor(name: string, age: number, Class: number) {
        super(name, age)
        this.Class = Class
    }

    student(gum: number) {
        console.log(`My name: ${this.name} age: ${this.age} and sleeping: ${gum}`)
    }
}
class teacher extends share {
    subject: string;

    constructor(name: string, age: number, subject: string) {
        super(name, age)
        this.subject = subject
    }
}

const student1 = new students("Rohim", 22, 9);
student1.student(12);

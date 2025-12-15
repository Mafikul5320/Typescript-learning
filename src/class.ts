class person {
    // name: string;
    // age: number;
    // isMerrid: boolean;

    constructor(public name: string, public age: number, public isMerrid: boolean) {
        this.name = name;
        this.age = age;
        this.isMerrid = isMerrid
    }
    OneTab() {
        console.log(`My name: ${this.name} and age is: ${this.age}`)
    }
}

const person1 = new person("Abc", 21, true);
// console.log(person1)
person1.OneTab()
const CreatArryWithGenerics = <X, Y>(value1: X, value2: Y) => {
    return [value1, value2]
}

const student1 = {
    name: "Karim",
    age: 20,
    isMarried: false

};
const student2 = {
    id:22,
    name: "nhd",
    isCar: false,
    age: 50,
    haveJob: true
};
const student3 = {
    id: 54,
    name: "Abc",
    isCar: false,
    age: 50,
    haveJob: true
};

type student = {
    id: number,
    name: string,
}

const courseStudent = <x extends student>(info: x) => {
    return {
        course: "next Level",
        ...info
    }
}



const student = CreatArryWithGenerics(student1, student2);
// console.log(student)
const courseStudents = courseStudent(student3)
console.log(courseStudents)

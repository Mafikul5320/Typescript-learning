type GenericArry<T> = Array<T>


const friend: GenericArry<string> = ["Karim", "Rahim", "Jodo", "Modo"];

const Bazer: GenericArry<number> = [10, 20, 60, 90];

const IsEligiable: GenericArry<boolean> = [true, false, true];



type coordinates<x, y, z> = [x, y, z];

const coordinates1: coordinates<string, string, number> = ["Karim", "Rahim", 20];
const coordinates2: coordinates<number, number, number> = [10, 20, 60];
const coordinates3: coordinates<boolean, boolean, boolean> = [true, false, true];



const arrObj: GenericArry<{ name: string, age: number, isGood: boolean }> = [

    {
        name: "abc",
        age: 20,
        isGood: true
    },
    {
        name: "xyz",
        age: 25,
        isGood: false
    },
]
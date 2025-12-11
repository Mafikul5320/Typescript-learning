interface teacher<T, x = null> {
    name: string;
    age: number;
    subject: T;
    isGood: boolean;
    bike?: x
};

const KarimSir: teacher<{ subName: string, Class: number }> = {
    name: "Karim",
    age: 23,
    subject: {
        subName: "bangla",
        Class: 9
    },
    isGood: true,

};
const RahimSir: teacher<{ about: string, age: number, }> = {
    name: "Rahim sir",
    age: 23,
    subject: {
        about: "Good Teacher",
        age: 25
    },
    isGood: true,

};


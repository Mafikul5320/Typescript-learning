type RichPeople = {
    name: string;
    age: number;
    car: string;
}

type people1 = "name" | "age" | "car";
type people2 = keyof RichPeople;

const BestPeople: people2 = "age";

type user = {
    id: number;
    name: string;
    address: {
        district: string;
        sub_district: string
    };
    isActive: boolean;

};

const user1: user = {
    name: "Rohim",
    id: 22,
    address: {
        district: "AB",
        sub_district: "BC"
    },
    isActive: true
}

const findUser = <x>(obj: x, key: keyof x) => {

    return obj[key];
};
const result = findUser(user1, "address");
console.log(result)
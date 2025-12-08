type Role = {

    id: number,
    role: "user" | "admin",
    contract: string,
    Address: string,
};

const newuser: Role = {
    id: 123,
    role: "admin",
    contract: "45",
    Address: "Dhaka"
};

type role = "admin" | "user";

const chackUser = (Role: role) => {
    if (Role === "admin") {
        return "Admin Dashboard"
    } else {
        return "User Dashboard"
    }
};
console.log(chackUser("admin"));

type karimHomeInfo = {
    companyName: string
    TotalHome: number,
    isCar: boolean
}
type KarimInfo = {
    name: string,
    Age: number,
    Address: string,
    isMarried: boolean
}

type AllInfoKarim = karimHomeInfo & KarimInfo;


const karim: AllInfoKarim = {
    companyName: "ABC",
    TotalHome: 20,
    isCar: true,
    name: "karim",
    Age: 20,
    Address: "Dhaka",
    isMarried: false
};
console.log(karim)
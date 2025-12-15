const add = (num1: number | string, num2: number | string) => {
    if (typeof num1 === "number" && typeof num2 == "number") {
        return num1 + num2
    }
    else {
        return num1.toString() + num2.toString()
    }
};

add(2, 2);
console.log(add(2, 2));
add("2", "3");
console.log(add("2", "3"));


type user = {
    name: string;
}

type Admin = {
    name: string;
    role: "Admin"
};

const chackUser = (chack: user | Admin) => {
    if ("role" in chack) {
        console.log("This is Admin")
    } else {
        console.log("This is simple user")
    }
}
chackUser({ name: "abc", role: "Admin" });
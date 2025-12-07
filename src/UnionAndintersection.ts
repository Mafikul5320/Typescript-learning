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


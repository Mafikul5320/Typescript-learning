const friend = ["rahim", "karim",];
const schoolfriend = ["rabbi", "jodu", "modo"];

friend.push(...schoolfriend);

// console.log(friend);
const person = { name: "Mafi", age: 20 };

const OtherInfo = { course: "PH", location: "Dhaka" }

const PersonInfo = { ...person, ...OtherInfo };
// console.log(PersonInfo);

const AllFriend = (...allFriend: string[]) => {
    allFriend.forEach((oneFiend: string) => {
        return console.log(`My new Friend is ${oneFiend}`)
    })

}

AllFriend("Jodo", "modo", "kodo")



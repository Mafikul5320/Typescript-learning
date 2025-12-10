interface user {
    name: string;
    age: number;
}

const user1: user = {
    name: "mafikul",
    age: 20
};

interface users extends user {
    id: number;
    isAdmin: boolean
}
const user3: users = {
    name: "ABCFnh",
    age: 22,
    id: 66,
    isAdmin: true
}
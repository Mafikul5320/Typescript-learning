type AllUser = {
    name: string;
    address: {
        division: string;
        District: string
    };
    contract: number;
    isActive: boolean;
};

const User1: AllUser = {
    name: "ABc",
    address: {
        division: "Dhaka",
        District: "Tangail"
    },
    contract: 159,
    isActive: true
}
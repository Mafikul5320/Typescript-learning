class Account {
    readonly userId: number;
    name: string;
    protected Balance: number;

    constructor(userId: number, name: string, Balance: number) {
        this.name = name;
        this.userId = userId;
        this.Balance = Balance;
    }

    // addTk(balance: number) {
    //     return this.Balance = this.Balance + balance
    // }

    set AddTk(balance: number) {
        this.Balance = this.Balance + balance;
    }
    get GetBalance() {
        return this.Balance
    }
};

class Account2 extends Account {
    test() {
        this.Balance;
    }

}

const MyAccount = new Account(102, "Rohim", 60);

MyAccount.AddTk = 500;
MyAccount.AddTk = 40;

console.log(MyAccount);
console.log(MyAccount.GetBalance)


// console.log(MyAccount.addTk(50));
// console.log(MyAccount.addTk(5));
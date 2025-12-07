
function add(num1: number, num2: number): number {
    const total = num1 + num2;
    return total
};
add(5, 8);

const user = {
    name: "Abc",
    Age: 20,
    Balance: 0,
    update(value: number): number {
        const total = this.Balance = value + this.Balance;
        return total;
    }
}
user.update(10)
console.log(user)

const num: number[] = [2, 5, 7, 9, 16, 20];

num.map((ele: number) => ele * ele)

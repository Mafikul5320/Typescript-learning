class Counter {
    static count: number = 0;

     static increment(plus: number) {
        return Counter.count = Counter.count + plus;
    }
    drecement(minus: number) {
        return Counter.count = Counter.count + minus;
    }


}

const count1 = new Counter();
const count2 = new Counter();
// console.log(count1.increment(1))
// console.log(count1.increment(1))
// console.log(count1.increment(1))
// console.log(count1.increment(1))
// console.log(count2.increment(1))
// console.log(count2.increment(1))
// console.log(count2.increment(1))
// console.log(count2.increment(1))

console.log(Counter.increment(1))
console.log(Counter.increment(1))
console.log(Counter.increment(1))
console.log(Counter.increment(1))
console.log(Counter.increment(1))
console.log(Counter.increment(1))

const discount = (input: unknown) => {

    if (typeof input === "number") {
        const discount = input * 0.1;
        console.log(discount)
    }
    else if (typeof input === "string") {
        const [discount] = input.split(" ")
        console.log(Number(discount) * 0.1);
    } else {
        console.log("invalid value");
    }
}

discount(100)
discount("100 Tk")
discount(null)
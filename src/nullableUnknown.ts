const discount = (input: number | string | null): number | string | undefined => {

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

    return undefined
}

const result1 = discount(100) as number


const result2 =discount("100 Tk") as string;

discount(null)
const Married = (age: number) => {
    const isMarried = age >= 21 ? "Eligiable for married" : "Not Eligiable for married"
    console.log(isMarried);
}

// Married(23);


const role = null;

const chackRole = role ?? 'guest'
console.log(chackRole)

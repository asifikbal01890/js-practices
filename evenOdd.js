function evenOrOdd(number) {
    const calculation = number % 2;
    let isEven;
   
    if (calculation === 0) {
        isEven = true;
    } else {
        isEven = false;
    }
    return isEven;
}

const num1 = evenOrOdd(45);
const num2 = evenOrOdd(60);
console.log(num2);
// const numbers = [42, 56, 82, 43, 95, 49, 65]

// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     sum = sum + element;
// }
// console.log(sum);

function sumOfArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

// const rajuNumbers = [42, 56, 82, 43, 95, 49, 65];
// const sajibNumbers = [1, 2, 3, 4, 5, 6, 7];
// const sum = sumOfArray(sajibNumbers);
// console.log(sum);


// const numbers2 = [73, 56, 90, 43, 65, 48, 91, 23, 44]
// let evenNum = [];
// for (let i = 0; i < numbers2.length; i++) {
//     const element = numbers2[i];
//     const number = element % 2;

//     if (number === 0) {
//         evenNum.push(element)
//     }
// }

function evenNumber(x) {
    let evenNum = [];
    for (let i = 0; i < x.length; i++) {
        const element = x[i];
        const number = element % 2;

        if (number === 0) {
            evenNum.push(element)
        }
    }
    return evenNum;
}

const numbers2 = [73, 56, 90, 43, 65, 48, 91, 23, 44]

const evenNumbers = evenNumber(numbers2);
console.log(evenNumbers);
const sumOfEven = sumOfArray(evenNumbers);

console.log(sumOfEven);
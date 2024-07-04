function leapYear(year) {
    const calculation = year % 4;
    let isLeapYear;
    if (calculation === 0) {
        isLeapYear = true;
    } else {
        isLeapYear = false;
    }
    return isLeapYear;
}


const raju = 2004;
const isLeapYear = leapYear(raju);
console.log(isLeapYear);
//Write a function in JavaScript that takes a number and finds the sum of all unique positive factors of a number. (The factors of a number are all numbers that divide evenly into it. For example, the unique positive factors of 12 are 1, 2, 3, 4, 6, and 12, and the sum would thus be 28.)

const sumPositiveFactors = (number) => {
    let sum = 0;
    let lastFactor = number;
    for(let i = 1; i < number; i++) {
        if(i >= lastFactor) {
            return sum;
        }
        else if(number % i === 0) {
            sum += i;

            if(number / i !== i) {
                sum += number / i;
                lastFactor = number / i;
            }
        }
    }
    return sum;
}

console.log(sumPositiveFactors(6));
console.log(sumPositiveFactors(12));
console.log(sumPositiveFactors(25));
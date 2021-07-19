//Write a function in JavaScript that takes a number and finds the sum of all unique positive factors of a number. (The factors of a number are all numbers that divide evenly into it. For example, the unique positive factors of 12 are 1, 2, 3, 4, 6, and 12, and the sum would thus be 28.)

const sumPositiveFactors = (number) => {
    let sum = 0;
    let lastFactor = number;
    for(let i = 1; i < number; i++) {
        //Shortcut to solution (i.e. 12 as example, breaks after 3*4 to avoid adding 4*3 and beyond)
        if(i >= lastFactor) {
            return sum;
        }
        //Enter block if is a factor
        else if(number % i === 0) {
            //add small number
            sum += i;

            //calculates largeNumber once, to avoid multiple division functions, maybe technically faster
            let largeNumber = number / i;
            //Enter block if other factor isn't identical (i.e. 5*5 for 25, we only want to add 5 once)
            if(largeNumber !== i) {
                //add large number
                sum += largeNumber;
                //set lastFactor to large number, allows a much shorter loop
                lastFactor = largeNumber;
            }
        }
    }
    return sum;
}

console.log(sumPositiveFactors(6));
console.log(sumPositiveFactors(12));
console.log(sumPositiveFactors(25));
//Write a function in JavaScript that converts weights to grams. The function should take two arguments. The first argument will be a number, the second will be an abbreviation for a unit of weight, either "lbs", "oz", "kg", "g", or "mg". Based on the second argument, convert the number to grams and return it.

const gramsPerPound = 453.59237;
const gramsPerOunce = 28.3495231;
const gramsPerKg = 1000;
const gramsPermg = 0.001;

const convertToGrams = (amount, type) => {
    switch (type) {
        case 'lbs':
            return amount * gramsPerPound;
            break;
        case 'oz':
            return amount * gramsPerOunce;
            break;
        case 'kg':
            return amount * gramsPerKg;
            break;
        case 'g':
            return amount;
            break;
        case 'mg':
            return amount * gramsPermg;
            break;
        default:
            break;
    }
}

let testAmount = 762;
let testType = 'kg';
console.log(convertToGrams(testAmount, testType) + ' grams in ' + testAmount + testType);


//Function #1 Take two numbers as arguments and return a new value after a mathematical operation (addition, subtraction, multiplication, etc.) Which operation is your choice.

//Add function
function addTwoNumbers(number1, number2) {
    return number1 + number2;
}

//Subtract function
function subtractTwoNumbers(number1, number2) {
    return number1 - number2;
}

//Multiply function
function multiplyTwoNumbers(number1, number2) {
    return number1 * number2;
}

//Divide function
function divideTwoNumbers(number1, number2) {
    return number1 / number2;
}

//Calls any math operation with two parameters, prints result
function mathTwoAndPrint(mathOperation, number1, number2) {
    console.log(mathOperation.toString() + ': ' + number1 + ', ' + number2 + ' = ' + mathOperation(number1,number2));
}

mathTwoAndPrint(multiplyTwoNumbers,89, 359);
mathTwoAndPrint(addTwoNumbers, 561, 346);
mathTwoAndPrint(divideTwoNumbers, 81, 9);
mathTwoAndPrint(subtractTwoNumbers, 49, 40);


//Function #2 Take two strings as arguments and return a value that has them concatenated.


function combineWords(string1, string2) {
    return string1 + ' ' + string2;
}

console.log(combineWords(combineWords('I', 'have'), combineWords('the', 'power!')));
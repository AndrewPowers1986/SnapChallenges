function fizzbuzz(intStart, intEnd) {
    for(let i = intStart; i <= intEnd; i++) {
        //Check if number is divisible by 2 (even)
        if(!(i % 2)) {
            //Check if number is divisible by both 2 and 3 for "baz"
            if(!(i % 3)) {
                console.log("baz");
            }
            //Number divisible by 2, but not by 3. "fizz" for 2
            else {
                console.log("fizz");
            }
        }
        //Number is not even, check if divisible by 3 for "buzz"
        else if(!(i % 3)) {
            console.log("buzz");
        }
        //Number is not even, is not divisible by 3, output the number
        else {
            console.log(i);
        }
    }
}

function fizzbuzz_ternary(intStart, intEnd) {
    for(let i = intStart; i <= intEnd; i++) {
        console.log((!(i%2) ? (!(i%3) ? "baz" : "fizz") : (!(i%3) ? "buzz" : i)));
    }
}

//fizzbuzz(0, 20);
fizzbuzz_ternary(0, 20);
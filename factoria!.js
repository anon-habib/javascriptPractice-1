function factorial(number){
    let result = 1;
    for (let i = 1; i <= number; i++){
        result = result * i;
    }
    return result;
};

const finalResult = factorial(7);
console.log(finalResult);

// reverse
function factorialReverse(number){
    let reverseResult = 1;
    for (let i = number; i >= 1; i--){
        reverseResult = reverseResult * i;
    }
    return reverseResult;
};

const finalReverseResult = factorialReverse(3);
console.log(finalReverseResult);

// It can be done with while loop and reverse.
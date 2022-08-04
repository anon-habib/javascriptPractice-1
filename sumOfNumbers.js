function sumOfNumbers(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
        // console.log(i, sum);
    }
    return sum;
}
let numberInput = sumOfNumbers(15);
console.log(numberInput);
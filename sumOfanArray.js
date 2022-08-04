// ‍sum of an array.
function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum += element;
        console.log(index, element, sum);
    }
    return sum;
}

// ‍sum of odd numbers of an array.
function getOddNumbersOfAnArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element %2 !== 0){
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}
const myNumber = [21, 46, 45, 87, 23, 54, 19];
const oddNumbers = getOddNumbersOfAnArray(myNumber);
const oddNumbersSum = getSumOfAnArray(oddNumbers); // sending the odd numbered array to the getSumOfAnArray function.
console.log("Odd Numbers Sum is:", oddNumbersSum);
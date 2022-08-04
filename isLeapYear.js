// returs true / false.
function isLeapYear(number){
    const reminder = number % 4;
    if(reminder == 0){
        return true;
    }
    return false;
}
const myYear = isLeapYear(1952); // input filed
console.log(myYear);
const yourYear = isLeapYear(2022); // input field
console.log(yourYear);
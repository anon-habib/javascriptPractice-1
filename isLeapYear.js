// returs true / false.
function isLeapYear(number){
    const reminder = number % 4;
    if(reminder == 0){
        return true;
    }
    return false;
}
const myYear = isLeapYear(1952); // input field
console.log(myYear);
const yourYear = isLeapYear(2022); // input field
console.log(yourYear);

// other complex, returs true / false.
function isLeapYear2(year2){
    const reminder = year2 % 4;
    if((0 == year2 % 4) && (0 != year2 % 100) || (0 == year2 % 400)){
        return true;
    }
    return false;
}
const myYear2 = isLeapYear2(1952); // input field
console.log(myYear2);
const yourYear2 = isLeapYear2(2022); // input field
console.log(yourYear2);

// method 1
function isEven(number){
    const reminder = number % 2;
    return reminder;
}
myReminder = isEven(6545613421); // input field.
if(myReminder == 0){
    console.log("This is an Even Number.");
}
else {
    console.log("This is an Odd number")
};

// method 2
function isEven2(number2){
    const reminder2 = number2 % 2;
    if(reminder2 == 0){
        console.log("This is an Even Number.");
    }
    else {
        console.log("This is an Odd number")
    };
}
myReminder2 = isEven2(545442); // input field.

// method 3 (returns true / false)
function isEven3(number3){
    const reminder3 = number3 % 2;
    if(reminder3 == 0){
        return true;
    }
    else {
        return false;
    };
}
const myNumber = isEven3(546558); // input filed
console.log(myNumber);
const yourNumber = isEven3(42545); // input field
console.log(yourNumber);
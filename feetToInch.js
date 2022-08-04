// inch to feet
function inchToFeet(p1Inches){
    const feet = p1Inches / 12; 
    return feet;
}
const p1Inch = 144;
const p1Feet = inchToFeet(p1Inch);
console.log("person 1 feet is: ", p1Feet);

// mile to kilometer
function miToKM(inputMI){
    const KM = inputMI / 0.621371192;
    return KM;
}
const myMI = 5;
const myKM = miToKM(myMI);
let fixedMyKM0 = myKM.toFixed(2);
let fixedMyKM = parseFloat(fixedMyKM0);
console.log("The Kilometer is: ", fixedMyKM)

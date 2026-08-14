//Question 12 : Check LeapYear
let prompt = require("prompt-sync")();
const input = Number(prompt("Enter first number: "));

const checkLeapYear = (year)=>{
    const condition1 = year % 4 === 0 && year % 100 != 0;
    const condition2 = year % 400 === 0;

    if( condition1 || condition2){
        return `${year} is a Leap Year`;
    }else{
        return `${year} is not a Leap Year`;
    }

}
console.log(checkLeapYear(input));
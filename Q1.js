// Question 1: Check Even or Odd

let prompt = require("prompt-sync")();
const input = Number(prompt("Enter a number"))
const check = (number)=>{
    if(number%2 == 0){
        console.log("Even Number");
    }
    else{
        console.log("Odd Number");
    }

}


check(input);

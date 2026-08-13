// Question 9: Largest of Three Numbers
let prompt = require("prompt-sync")();
const input1 = Number(prompt("Enter first number: "));
const input2 = Number(prompt("Enter  seccond number: "));
const input3 = Number(prompt("Enter third number: "));

const largestOfThreeNumbers = (a , b , c)=>{
    if(a > b && a > c) return `${a} is largest`
    else if(b > a && b > c) return `${b} is largest`
    else return `${c} is largest`
/* 

*/    

}
console.log(largestOfThreeNumbers(input1 , input2 , input3));

// Question 3: Factorial of a Number
let prompt = require("prompt-sync")();
const input = Number(prompt("Enter a number"))
const factorial = (n) => {
    let result = 1;
    for(let i = 1 ; i <= n ; i++){
      result = result * i
    }
    return result;

}
console.log(factorial(input));

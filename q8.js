// Sum of Digits

let prompt = require("prompt-sync")();
const input = Number(prompt("Enter a number: "));

const sumOfDigits = (n) => {
  /*
    153 ---> 1 + 5 + 3 = 9
  */

  let divide = n;
  let sum = 0;

  while (divide > 0) {
    let remainder = divide % 10;       // Last digit
    sum += remainder;                  // Add last digit
    divide = Math.floor(divide / 10);  // Remove last digit
  }

  return sum;
};

console.log(sumOfDigits(input));
//  Reverse a Number
let prompt = require("prompt-sync")();
const input = Number(prompt("Enter a number"));
const reverseNumber = (n) => {
  //12345 ---> 54321
  while (n.length == 1) {
    let remainder = n % 10; //answer
    let divide = n / 10; //shrink number
    console.log(remainder);
  }
};
console.log(reverseNumber(input));

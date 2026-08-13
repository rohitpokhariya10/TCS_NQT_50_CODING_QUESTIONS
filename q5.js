// Question 5: Reverse a Number
let prompt = require("prompt-sync")();
const input = Number(prompt("Enter a number"));
const reverseNumber = (n) => {
  //12345 ---> 54321

  let divide = n;
   let reverse = 0;
  while (divide > 0) {
    let remainder = divide % 10; //answer
    divide = Math.floor(divide / 10); //
    reverse = reverse * 10 + remainder;
  }
  return reverse;
};
console.log(reverseNumber(input));

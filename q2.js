//Check Prime Number
let prompt = require("prompt-sync")();
const input = prompt("Enter a number");
const primeNumber = (n) => {
  if (n < 2)  console.log("NP")
  for (let i = 2; i < n; i++) {
    if (n % i == 0){
       console.log("NP")
       break;
    } else {
      console.log("P")
      break;
    }
  }
};
primeNumber(input);

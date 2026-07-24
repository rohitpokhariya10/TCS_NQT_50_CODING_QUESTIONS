//Fibonacci Series (First N Terms)
let prompt = require("prompt-sync")();
const input = Number(prompt("Enter a number"));
const fibonacciSeries = (n) => {
  let first = 0;
  let second = 1;
  if (n <= 0) {
    return;
  }
  console.log(first);
  if (n === 1) {
    return;
  }
  console.log(second);
  for (let i = 0; i < n - 2; i++) {
    let ans = first + second;
    console.log(ans);
    first = second;
    second = ans;
  }
};
fibonacciSeries(input);

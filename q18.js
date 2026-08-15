//18. Linear Search

let prompt = require("prompt-sync")();
let arr = prompt("Enter an array").trim().split(" ").map(Number);
let target = Number(prompt("Enter target element").trim());
const linearSearch = (arr, target) => {
  console.log("Input Array-->", arr);
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) {
      return `The element is ${arr[i]} at ${i} index`;
    }
  }
};
console.log(linearSearch(arr, target));

//20. Bubble Sort

let prompt = require("prompt-sync")();
let arr = prompt("Enter an array").trim().split(" ").map(Number);

/* 
Bubble Sort Algorithm : Adjacent elements ko compare karo, aur agar left wala bada hai to swap kar do.
*/
const bubbleSort = (arr) => {
  console.log("Input Array: ", arr);
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
        //SWAP
      if (arr[i] > arr[j]) {
        //swap
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      console.log(arr);
    }
  }
  return `Sorted array : ${arr}`;
};
console.log(bubbleSort(arr));

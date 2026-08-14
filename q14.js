//Question 14: 4. Reverse a String
let prompt = require("prompt-sync")();
const input = prompt("Enter first number: ");
let str = input.split("")
const reverseString = (input) => {
    //console.log(typeof str)
    
  let n = input.length - 1;
  let i = 0 , j = n;
   while(i < j){
    //swap
    let temp = str[i];
    str[i] =  str[j];
    str[j] = temp;
    i++;
    j--;
   }

   return str.join("");
};
console.log(reverseString(input));

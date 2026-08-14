//Qestion 11:  LCM of Two Number
let prompt = require("prompt-sync")();
const input1 = Number(prompt("Enter first number: "));
const input2 = Number(prompt("Enter  seccond number: "));

function LCM(a,b){
    let max = Math.max(a , b);
    
    for(let i = max ; i <= a * b ; i++){
      if(i % a === 0 && i % b === 0){
        return i;
      }
    }

}
console.log(LCM(input1 , input2));
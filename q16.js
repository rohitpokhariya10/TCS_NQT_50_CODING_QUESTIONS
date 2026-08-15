//16. Remove Duplicates from String
let prompt = require("prompt-sync")();
const input = prompt("Enter a String: ");
const removeDuplicateFromString=(str)=>{
    let present = new Set();//Set Data Structure stores only Unique elements
    let ans =""
   for(let ch of str){
     if(!present.has(ch)){
        present.add(ch);
        ans += ch;
     }
   }
    return ans;
}
console.log(removeDuplicateFromString(input))
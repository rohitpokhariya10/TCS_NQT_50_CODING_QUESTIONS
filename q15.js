//15. CheckAnagram

let prompt = require("prompt-sync")();
const input1 = prompt("Enter first String: ");
const input2 = prompt("Enter second String: ");

const checkAnagram = (input1 , input2)=>{
    let l1 = input1.length;
    let l2 = input2.length;
    if(l1 != l2) return "Not an Anagram"
    let freqMap = new Map();

    for(let i = 0 ; i < l1 ; i++){
        // add inpu1 element in freqMap
        let freq = freqMap.get(input1[i]);//it gives me the frequency of current element
        freqMap.set(input1[i] , (freq || 0) + 1);
    }
    //cancel out frequency
    for(let i = 0 ; i < l2 ; i++){
        let char = input2[i];

        if(!freqMap.has(char)) return "Not an Anagram"

        let freq = freqMap.get(input2[i]);

       if(freq == 1) freqMap.delete(char)
       else freqMap.set(char , freq-1);
    }
    return freqMap.size == 0 ? "Anagram" : "Not an Anagram";

   
}
console.log(checkAnagram(input1 , input2));
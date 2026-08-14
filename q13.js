//Question 13: Count Vowels and Consonants
let prompt = require("prompt-sync")();
const input = (prompt("Enter first number: "));

const vowels = ['a' , 'e' , 'i' , 'o' , 'u']
const countVowelsAndConsonants=(str)=>{
    let vowel = 0;
    let consonants = 0;
    let cleanInput = str.toLowerCase().trim();
    for(let i=0 ; i < cleanInput.length ; i++){
        if(cleanInput[i] === " ") continue;
        if(vowels.includes(cleanInput[i])){
            vowel++
        }else{
            consonants++;
        }
    }
    return `Vowels : ${vowel} and Consonanats :${consonants}`;

}
console.log(countVowelsAndConsonants(input));
// Question 6: Check Palindrome Number
let prompt = require("prompt-sync")();
const input = Number(prompt("Enter a number"));

const checkPalindrome = (n) =>{
    // 121
    let divide = n;
    let res = 0;
    let isPalindrome = false;
    while(divide > 0){
        let remainder = divide%10;
        divide = Math.floor(divide/10);
        res = res * 10 + remainder;
        // console.log(res);
        if(res === n) isPalindrome = true;
    }
    isPalindrome ? console.log("Palindrome") : console.log("Not Palindrome")
   


}
checkPalindrome(input)

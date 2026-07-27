// Armstrong Number

let prompt = require("prompt-sync")();
const input = Number(prompt("Enter a number"));

const armstrongNumber = (n) => {
  /* Explanation:
153 has 3 digits.
1³ + 5³ + 3³ = 1 + 125 + 27 = 153 
153 --> The sum is equal to the original number, so 153 is an Armstrong Number. */

  // **  means power/exponent operator
  let len = String(n).length;
  console.log("len", len);
  let ans = 0;
  for (let ch of String(n)) {
    console.log(ch);
    ans += Number(ch) ** len;
  }
  return ans;
};
console.log(armstrongNumber(input));

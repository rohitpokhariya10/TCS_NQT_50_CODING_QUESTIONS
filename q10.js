// Question 10: GCD of Two Numbers
let prompt = require("prompt-sync")();
const input1 = Number(prompt("Enter first number: "));
const input2 = Number(prompt("Enter  seccond number: "));

/* BruteForce Approach */
const bruteForce = (a , b)=>{
  /* 
  TC: O(N)
  SC: O(N)
  */
  let a_factors = [];
  let b_factors = [];

  //FACTORS OF B
  for (let i = 1; i <= a; i++) {
    if (a % i === 0) {
      a_factors.push(i);
    }
  }
  //   FACTORS OF A
  for (let i = 1; i <= b; i++) {
    if (b % i === 0) {
      b_factors.push(i);
    }
  }

  console.log("a_factors-->", a_factors);
  console.log("b_factors-->", b_factors);

  /* Check GCD */
  let gcd = 1;
  for (let i = 0; i < a_factors.length; i++) {
    if (a_factors.includes(b_factors[i])) {
     // console.log(b_factors[i])
      gcd = b_factors[i];
    }
  }
  return gcd;
}
const optimalApproach=(a , b)=>{
  let min  = Math.min(a,b);
  let gcd = 1;
  for(let i = 1 ; i <= min ; i++){
    if((a%i==0 ) && (b%i === 0)){
     gcd = i;
    }
  }
  return gcd;
}
const GCD = (a, b) => {
//console.log(bruteForce(a , b));
console.log(optimalApproach(a , b));
};
console.log(GCD(input1, input2));

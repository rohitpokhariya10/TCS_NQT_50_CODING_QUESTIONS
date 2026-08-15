//17. Find Second Largest inArray


let prompt = require("prompt-sync")();
let arr = prompt("Enter array elements: ").trim().split(" ").map(Number);


const secondLargestElement = (arr)=>{
    console.log("Input Array:", arr);
    let firstLargest =  -Infinity;// -Infinity --> smaller than any finite number
    let secondLargest = -Infinity;

    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > firstLargest  ){
            secondLargest = firstLargest;
            firstLargest = arr[i];
        }
         else if(arr[i] < firstLargest && arr[i] > secondLargest){
            secondLargest = arr[i];
        }
    }
    return `Second greatest number is ${secondLargest}`;


}
console.log(secondLargestElement(arr))
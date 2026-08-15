// 19. Binary Search (SortedArray)

let prompt = require("prompt-sync")();
let arr = prompt("Enter an array").trim().split(" ").map(Number);
let target = Number(prompt("Enter target element"));

const binarySearch=(arr , target)=>{
    console.log("Input Array:", arr);
    let n = arr.length
    let start = 0 , end = n-1;
    while(start <= end){
        let mid = Math.floor((start+end)/2);

        if(arr[mid] == target){
            return `Target element ${target} is at ${mid} index`
        }
        else if(target > arr[mid]){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }

}
console.log(binarySearch(arr , target))
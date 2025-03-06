// Given an array, find max valye of array reccursively,

let arr = [14,16,21,-5,32,19,43]

function f(arr, idx){

    if(idx >= arr.length) return -Infinity;

    return Math.max(arr[idx], f(arr, idx + 1))
}

console.log(f(arr, 0))
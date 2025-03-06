// Print everything  Array from idx to n-1

let arr = [21,2,56,34,43,55]

function f(arr, idx){

    if(idx >= arr.length) return
    console.log(arr[idx]) //self work
    f(arr, idx + 1)
}

f(arr, 0)
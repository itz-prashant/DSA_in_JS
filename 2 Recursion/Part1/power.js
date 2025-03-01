// Given 2 integer value a & b , write a recursive function to implement a to the power b

function f(a, b){
    
    if(b == 0) return 1;
    return a * f(a , b-1)
}

console.log(f(2,3))
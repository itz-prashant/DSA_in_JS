// Given a integer value n , write a recursive function to print n decreasing order

function f(n){

    if(n == 0) return
    console.log(n)
    f(n-1)
}

f(5)

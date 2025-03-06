// Given a number x , calculate the count of number of binary strings of length x, which has no consecutive one?

// Test cases 
// n=1   0, 1  = 2
// n=2   01, 10, 00  =3
// n=3   000, 001, 010, 100, 101 =5
// n=4   0000, 0001, 0010, 0100,1000, 1001,1010,0101 = 8
// n=5   00000, 00001, 00100, 01000, 10000, 10001, 10010, 10100,10101,01010,01001,00100,00101 = 13

function f(n){
    if(n == 1){
        return 2
    }else if(n == 2){
        return 3
    }else{
        return f(n-1) + f(n-2)
    }
}
console.log(f(5))
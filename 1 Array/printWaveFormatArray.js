// Print 2d array in wave format

/** 1 2 3 4
    5 6 7 8
    9 10 11 12 **/

// output = 1 5 9 10 6 2 3 7 11 12  8 4

let arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]

for(let c = 0; c < arr[0].length; c++){

    if(c % 2 == 0){
        for(let r = 0; r < arr.length; r++ ){
            console.log(arr[r][c] + " ")
        }
    }else{
        for(let r = arr.length -1; r >= 0 ; r-- ){
            console.log(arr[r][c])
        }
    }
}
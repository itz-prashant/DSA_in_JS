let input = [
    [1,2,3],
    [4,5,6,],
    [7,8,9,]
]

// output = [[1,4,7],[2,5,8],[3,6,9]]

let finalArr =[]

for(let c = 0; c < input.length; c++){
    let arr = [];
    for(let r = 0; r < input[c].length; r++){
        arr.push(input[r][c])
    }
    finalArr.push(arr)
}

console.log(finalArr);

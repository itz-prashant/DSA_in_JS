let arr1 = [
    [1,2,3],
    [4,5,6]
]
let arr2 = [
    [1,1],
    [1,2],
    [2,1]
]
/** output = [
    [9, 8],
    [21, 20]
] **/

let finalResuslt = [];

for(let i = 0; i < arr1.length; i++){

    let arr = []
    let sum = 0

    for(let j = 0; j < arr2[0].length; j++){

        for(let k = 0; k < arr2.length; k++){
            let add = arr1[i][k] * arr2[k][j]
            sum += add
        }
        arr.push(sum)
        sum = 0
    }
    finalResuslt.push(arr)
}

console.log(finalResuslt);

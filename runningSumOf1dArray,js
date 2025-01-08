let arr = [1,2,3,4];

// output = [1, 3, 6, 10]
// Explanation = [1, 1+2, 1+2+3, 1+2+3+4]

let output = []

let runningSum = 0;

for(let i = 0; i < arr.length; i++){
    
    runningSum += arr[i]
    output.push(runningSum)
}

console.log(output);

// Second Method

let result = arr.map((num, i)=>{
    return arr.slice(0, i + 1).reduce((sum, value)=> sum + value ,0)
})

console.log(result);
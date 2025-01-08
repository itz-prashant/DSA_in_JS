let arr1 = [10,15,12,20,10,16,19,17,15,16];
let arr2 = [8,16,6,20,8,26,33,10,15,25];

// output [10,15,20,16]

let nonRepatArr1 = arr1.filter((elm, i)=>{
    return arr1.indexOf(elm) == i 
})

let nonRepatArr2 = arr2.filter((elm, i)=>{
    return arr2.indexOf(elm) == i 
})

let result = nonRepatArr1.filter((elm)=>{
    return nonRepatArr2.includes(elm)
})

console.log(result);

// Second method 

let set1 = new Set(arr1);
let set2 = new Set(arr2);

let output = [...set1].filter(elm => set2.has(elm))

console.log(output);


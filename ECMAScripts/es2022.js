// 1. Top-level await
// 2. Class Fields and Methods: Public & Private
// 3. Static Class Fields & Methods
// 4. At() method in an array

const arr = [1,23,4,5,43,3,75];
console.log(arr[2]);
console.log(arr[-1]);   // undefined

// but we use at() then support negative indexing
console.log(arr[arr.length-1]); // 75
console.log(arr.at(-1));    // 75

// ECMAScript 2016 is a small update compared to previous versions. It introduced only two new features, but both are useful and widely used.

//  1. Array.prototype.includes()  - it's like array methods in Array Topic
// Syntax - array.includes(valueToFind, fromIndex)

const devices = ["mobile","laptop","tablet"];
console.log(devices.includes("mobile"));
// true

console.log(devices.includes("pc"));
// false   
  
// 2. Exponentiation Operator **
// A shorthand for power/exponent (Math.pow).

console.log(2**3);
console.log(Math.pow(2,3));
// both are same

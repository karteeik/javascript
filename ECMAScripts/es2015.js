// ECMAScript Features (2015)

// The Object properties - Modern Javascript
const name = "john";
const age = 21;

// Object
const person = { name, age };      // is work like that const person = { name: name, age: age};
console.log(person);

// Destructuring in JavaScript - Destructuring means extracting values from arrays or objects and assigning them to variables

// Array Destructuring
const numbers = [10, 20, 30];
// const [first,second,third] = numbers;
// console.log(first);
// console.log(second);
// console.log(third);

// you skip the values
const [, second, third] = numbers;
// console.log(first);
console.log(second);
console.log(third);

// swipe two numbers using third var
let a = 10;
let b = 20;

[b, a] = [a, b];
console.log(a, b);

// Object Destructuring
const student = { sName: "john", sAge: 23 };

// Traditional Way to Catch Object Properties
// console.log(student.sName);

const { sName, sAge } = student;
console.log(sName);
console.log(sAge);

// Rename Variables
// const { sName: myName, sAge: myAge} = student;
// console.log(myName);
// console.log(myAge);

// Set default Values
const { city = "Surat"} = student;  // default used because city is not in object property
console.log(city);
console.log(student);

// Spread Operator (...) - Expand (or spread out) the elements of an array, object, or iterable.
// Simple Meaning - Spread operator copies or unpacks data from arrays/objects.

// 1. Copy Arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1];  //creates a **shallow copy

console.log(arr2); // [1, 2, 3]

// 2. Combining Arrays / Concatenating Arrays
const a1 = [1, 2, 3];
const b1 = [3, 4];

const combined = [...a1, ...b1];
console.log(combined); // [1, 2, 3, 4]

// 3. Adding Elements to Existing Array
const ar1 = [1,2,3,4,5];
console.log(ar1);

// ar1.push(1,2,3); Traditional way to write
ar1.push(...[1,2,3]);
console.log(ar1);

// 4. String to Array
const str = "KARTIK";
// console.log(str.split('')); Traditional way to write
console.log([...str]);

// Rest Parameters - Rest parameters allow a function to accept any number of arguments as an array using the ... syntax.

function show(...args) {
    console.log(args);
}
show(1,2,3,4,5,6,7,8,9);

// Sum of Numbers
function sumOf(...nums) {
    return nums.reduce((acc,currval) => (acc = acc+currval),0);
}
console.log(sumOf(1,2,7,4,3));

// Note - A function defination can only 1 rest parameter, and rest parameter must be the last parameter in the function defination

// function fn1(...a,...b);        // Not Valid
// function fn2(...a,b,c);        // Not Valid

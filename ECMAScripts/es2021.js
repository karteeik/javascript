// 1. String.prototype.replaceAll()
// A new method to replace all instances of a substring without needing a regular expression.

const str1 = "hello john, hello again";
// console.log(str1.replace(/hello/,"hi"));    // only first apply
console.log(str1.replace(/hello/g,"hi"));    // g means all matches

// console.log(str1.replaceAll("hello","hi"));
// No need for regex.
// Safer and more readable.

// 2. Logical Assignment Operators (&&=, ||=, ??=)
// These combine logical operators (&&, ||, ??) with assignment.

// 1. &&= (Logical AND assignment)
// Only assigns the right-hand value if the left-hand value is truthy.

// let a;
// let a=null;
let a=true;
let b=false;
a &&= b;    // a = a && b; it means true = true && false = false
console.log(a);

// 2. ||= (Logical OR assignment)
// Only assigns the right-hand value if the left-hand value is falsy.

// a ||= b;  // same as: a = a || b;
let username = "";
username ||= "Guest";
console.log(username); // "Guest"
// username was an empty string(falsy), then assign Guest

// if left hand side is truthy 
let username1 = "Kartik";
username1 ||= "Guest";
console.log(username1); // "Kartik"


// 3. ??= (Nullish coalescing assignment)
// Only assigns the right-hand value if the left-hand value is null or undefined (not just falsy).

// a ??= b;  // same as: a = (a ?? b);
let x=null;
let y=120;
x ??= y;
console.log(x);

// 3. Numeric Seprators (_)
let lakhs = 1_00_000;
let byte = 0b101;
console.log(lakhs);
console.log(byte);

// 4. Promise.any() (Opposite of Promise.all())
// Returns first fulfilled promise, and ignores rejections.
const p1 = Promise.reject("fail");
const p2 = Promise.resolve("success");
const p3 = Promise.reject("fail again");

Promise.any([p1, p2, p3]).then(console.log); // "success"
// Use Cases : Use when any result is enough (e.g., first loaded image, first API response).

// 6. Object.hasOwn() – Better hasOwnProperty()

const obj = {
    name: 'john',
    age: 38,
}
console.log(obj.hasOwnProperty("name"));    // old way
console.log(Object.hasOwn(obj, "age"));     // safer and cleaner

// The Object Create 
const newObj = Object.create(null);     // no protoType
newObj.name = "john";
// console.log(newObj.hasOwnProperty("name"));     // Error
console.log(Object.hasOwn(newObj,"name"));     // True

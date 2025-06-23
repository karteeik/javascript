// 1. String.prototype.replaceAll()
// A new method to replace all instances of a substring without needing a regular expression.

const str1 = "hello john, hello again";
// console.log(str1.replace(/hello/g,"hi"));

console.log(str1.replaceAll("hello","hi"));
//  Why it's useful:
// No need for regex.
// Safer and more readable.

// 2. Logical Assignment Operators (&&=, ||=, ??=)
// These combine logical operators (&&, ||, ??) with assignment.
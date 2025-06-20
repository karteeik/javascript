// ES2018 brought useful features focused on asynchronous patterns, regular expressions, and object manipulation.

// 1. Asynchronous Iteration with for await...of
// 2. Rest/Spread Properties for Objects
const user = { name: "John", age: 30, city: "Delhi" };
const { name, ...rest } = user;
console.log(rest); // { age: 30, city: "Delhi" }

// Object Spread
// Copy or merge objects.
const user1 = { name: "Alice" };
const user2 = { ...user1, age: 25 };
console.log(user2); // { name: "Alice", age: 25 }


// 3. Promise.prototype.finally()
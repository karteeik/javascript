// ECMAScript 2017 added several practical and powerful features to JavaScript, especially for asynchronous programming, objects, and strings.

// 1. async / await 
// Makes asynchronous code easier to write and read — like synchronous code.
async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  console.log(data);
}
fetchData();


// 2. Object.values() and Object.entries() 
const user = { name: "John", age: 25 };
console.log(Object.values(user)); // ["John", 25]
console.log(Object.entries(user)); // [["name", "John"], ["age", 25]]


// 3. String.prototype.padStart() and padEnd()
// Adds padding (characters) at the start or end of a string.
console.log("35".padStart(6, "0"));  // "005"
console.log("5".padEnd(3, "0"));  // "500"
// Useful for formatting numbers, codes, or tables.


// 4. Object.getOwnPropertyDescriptors()
// Returns all property descriptors (including getters/setters) of an object.
const obj = {
  name: "Alice",
  get greet() {
    return "Hello!";
  }
};

console.log(Object.getOwnPropertyDescriptors(obj));


// 5. Trailing commas in function parameters
// Now you can add a comma at the end of function parameters without error: 
function sayHi(name, age,) {
  console.log(name, age);
}
sayHi("john",23);

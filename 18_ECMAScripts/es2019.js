// ECMAScript 2019 introduced useful tools for working with arrays, strings, objects, and optional error handling

// 1. Array.prototype.flat()
// Flattens nested arrays into a single-level array.

const arr = [1, 2, [3, 4, [5]]];

console.log(arr);
console.log(arr.flat());        // [1, 2, 3, 4, [5]]
console.log(arr.flat(2));       // [1, 2, 3, 4, 5]


// 2. Array.prototype.flatMap()
// Maps each element, then flattens the result (1 level deep).

const arr1 = ["My Name","Is","John Due"];

console.log(arr1);
const fltmap = arr1.flatMap((curVal) => curVal.split(""));
console.log(fltmap);


// 3. Object.fromEntries()
// Converts key-value pairs (array of arrays) into an object.
// Opposite of Object.entries(obj)

const student = [["Name","John"],["Age",25]];
const record = Object.fromEntries(student);
console.log(record);
console.log(typeof record);

// 4. String.prototype.trimStart() / trimEnd()
// Remove spaces from beginning or end of a string.

const msg = "   Hello world!   ";
console.log(msg.trimStart()); // "Hello world!   "
console.log(msg.trimEnd());   // "   Hello world!"


// 5. Optional catch binding
// No need to name the error in a catch block if not used.

try {
  throw new Error("Oops!");
} catch {
  console.log("Error caught, but no variable needed!");
}


// 6. Symbol.prototype.description
// Access the description of a symbol.

const sym = Symbol("This is Me!");
console.log(typeof sym);
console.log(sym);
console.log(sym.description);

// 7. Stable Array.sort()
// If two elements are equal, their original order is preserved in the sorted array.
const items = [
  { name: "item1", value: 2 },  
  { name: "item2", value: 1 },  // Comes First in original order
  { name: "item3", value: 2 },
];

items.sort((a, b) => a.value - b.value);
console.log(items); // order of item1 and item2 is preserved

    
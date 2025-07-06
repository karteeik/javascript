// A Set is a built-in object in JavaScript that lets you store unique values — meaning no duplicates allowed.

// Each value in a Set must be unique
// Values can be any type: primitive or object
// Maintains insertion order

// Syntax - const mySet = new Set();

const mySet = new Set();

// it's Methods
// 1 - add() method - add set element
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2);   // Duplicate Not Allow - ignored

console.log(mySet);

// 2 - delete() method - delete set element
mySet.delete(3);

console.log(mySet);
 
// 3 - has() method - checks element is exits in set, return boolean value
console.log(mySet.has(1));

// 4 - clear() method - clear set
// mySet.clear()
console.log(mySet);

// 5 - size method - return size of set
console.log(mySet.size);

// Uses - Remove duplicates from an array, Store unique items (e.g., tags, IDs, etc.)

const set = new Set([1, 2, 3]);
console.log(set);

const arr = [...set];
console.log(arr); // [1, 2, 3]

// Remove Duplicates from Array

const arr1 = [1,23,45,65,3,3,45,2,2,65];
const set2 = [...new Set(arr1)];
console.log(set2);

// the current JavaScript standard released in June 2024

// 1. Object.groupBy() & Map.groupBy()
// Grouping data By object values

const items = [
    { year: "2023", id: 0 },
    { year: "2023", id: 1 },
    { year: "2024", id: 2 },
];

const grouped = Object.groupBy(items, el => el.year);
console.log(grouped);

// 2. Promise.withResolvers()
// Simplifies promise creation with embedded resolve and reject function
const { promise, resolve, reject } = Promise.withResolvers();
setTimeout(() => resolve("done"), 1000);
promise.then(console.log); // "done"

// 3. RegExp /v flag for Unicode & sets
// console.log(/^[\p{L}&&[^aeiou]]+$/v.test("crypt"));// true

// 4. Resizable ArrayBuffer & SharedArrayBuffer

// ArrayBuffer is a low-level binary data buffer in JavaScript.
// You use it with typed arrays like Uint8Array, Float32Array, etc.
// It's mainly used in things like: WebAssembly, File I/O, Image/Audio/Video processing, Networking, etc.

const buffer = new ArrayBuffer(8,{maxByteLength: 16});
// 16 - initial size (bytes)
// maxByteLength = max limit for resizing 
console.log(buffer);

// Resize the Buffer
buffer.resize(15);
buffer.resize(18);  // Error because max limit is 16
console.log(buffer);

// SharedArrayBuffer lets you share memory between threads (Web Workers)
const bufferr = new ArrayBuffer(8, { maxByteLength: 16, resizable: true });
console.log(bufferr);

// 5. Atomics.waitSync() / waitAsync()
// Non-blocking, async-safe synchronization primitives for SharedArrayBuffer, ideal for concurrent/worker contexts .

// 6. Unicode string utilities
// String.prototype.isWellFormed() - Checks if the string is a valid UTF-16 sequence
// String.prototype.toWellFormed() - Fixes an invalid string by removing or replacing ill-formed characters.
// These help you handle invalid Unicode strings, especially when working with emojis, symbols, and multi-language text.

console.log('txt'.isWellFormed());   
console.log('🔧'.isWellFormed());   
console.log('@'.isWellFormed());   
console.log('\uD800'.isWellFormed());   // false

const broken = "\uD800ABC"; // invalid start
console.log(broken.isWellFormed()); // false

const fixed = broken.toWellFormed();
console.log(fixed);           // "�ABC"
console.log(fixed.isWellFormed()); // true

console.log('\uD800'.toWellFormed());   // removes lone surrogate

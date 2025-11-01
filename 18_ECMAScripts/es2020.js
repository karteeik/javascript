// ES2020 added powerful tools for optional chaining, null checks, big integers, and more. These features make code safer, shorter, and cleaner.

// 1. Optional Chaining (?.)
// Safely access deeply nested properties without errors.

const user = {
    name: "john",
    age: 23,
    profile: {
        field: "BCA",
        term: "first",
        subject: {
            maths: 24,
            eng: 34,
            science: 32,
        },
    },
};

console.log(user);
// Traditional Way to access subjects
console.log(user.profile.subject.eng);

// let findOne = user.profile.subject ? user.profile.subject.eng : "Not yet";
let findOne = user.profile.subject ?.eng ?? "Not yet";
// let findOne = user.profile.subject.eng ?? "Not yet";
console.log(findOne);
 

// 2. Nullish Coalescing Operator (??)
// Provides a default value only when the left side is null or undefined.
// it returns right hand side value when left hand operand is null or undefined, otherwise its return left hand operand

const age = 0;

console.log(age || 18);   // 18  (because 0 is falsy)
console.log(age ?? 18);   // 0  (only checks for null or undefined)

// 3. BigInt – Work with really big numbers
// Represents integers larger than Number.MAX_SAFE_INTEGER.

const maxSafeInt = Number.MAX_SAFE_INTEGER;     // 9007199254740991
console.log(maxSafeInt);
console.log(maxSafeInt + 11);

const big = 1234567890123456789012345678901234567890n;
console.log(big + 10n); // Works 

// 4. Promise.allSettled()
// Waits for all promises to complete — whether fulfilled or rejected.

const tasks = [
  Promise.resolve("Success"),
  Promise.reject("Fail"),
];

Promise.allSettled(tasks).then(results => {
  console.log(results);
});

// 5. globalThis
// Provides a universal global object that works in any environment (browser, Node, etc.).
console.log(globalThis); // Window in browser, global in Node.js

// 6. dynamic import()
// Load JS modules dynamically (lazy-loading).

button.addEventListener("click", async () => {
  const module = await import("./math.js");
  console.log(module.add(2, 3));
});

// 7. matchAll() for global regex
// Finds all matches in a string with capturing groups.

const str = "test1 test2";
const regex = /test(\d)/g;

const matches = [...str.matchAll(regex)];
console.log(matches[0][1]); // "1"


// 8. Private Class Fields (#)
// Defines truly private properties in classes.

class Person {
  #name = "Alice";

  getName() {
    return this.#name;
  }
}

const p = new Person();
console.log(p.getName());   // "Alice"
// console.log(p.#name);       // SyntaxError

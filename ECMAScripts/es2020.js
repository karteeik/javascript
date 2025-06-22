// ES2020 added powerful tools for optional chaining, null checks, big integers, and more. These features make code safer, shorter, and cleaner.

// 1. Optional Chaining (?.)
// Safely access deeply nested properties without errors.

const user = { profile: { name: "Alice" } };

console.log(user.profile?.name);      // "Alice"
console.log(user.profile?.age);       // undefined
console.log(user.address?.city);      // undefined


// 2. Nullish Coalescing Operator (??)
// Provides a default value only when the left side is null or undefined.

const age = 0;

console.log(age || 18);   // 18  (because 0 is falsy)
console.log(age ?? 18);   // 0  (only checks for null or undefined)

// 3. BigInt – Work with really big numbers
// Represents integers larger than Number.MAX_SAFE_INTEGER.

const big = 1234567890123456789012345678901234567890n;

console.log(big + 10n); // Works 

// 4. Promise.allSettled()
// 5. globalThis
// 6. dynamic import()
// 7. matchAll() for global regex
// 8. Private Class Fields (#)

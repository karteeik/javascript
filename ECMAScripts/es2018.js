// ES2018 brought useful features focused on asynchronous patterns, regular expressions, and object manipulation.

// 1. Asynchronous Iteration with for await...of
const urls = [
  "https://api.example.com/data1",
  "https://api.example.com/data2",
];

async function fetchAll() {
  for await (const url of urls) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }
}


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
// Runs after a promise is settled (either resolved or rejected).
//  Good for hiding loaders, cleaning up, etc.
fetch("https://api.example.com")
  .then(res => res.json())
  .catch(err => console.error(err))
  .finally(() => console.log("Done!"));


// 4. New RegExp Features

// s (dotAll) flag:
// Makes . match newline characters too.
const str = "Hello\nWorld";
console.log(/Hello.World/.test(str));      // false
console.log(/Hello.World/s.test(str));     // true

// Named capture groups:
// Name parts of your regex match.
const date = "2025-06-19";
const regex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const match = date.match(regex);
console.log(match.groups.year); // 2025

// Lookbehind assertions:
// Match patterns behind a string.
console.log(/(?<=\$)\d+/.exec("$100")); // 100

// Unicode property escapes (\p{...}):
// Matches characters by Unicode category.
const emoji = "🎉";
console.log(/\p{Emoji}/u.test(emoji)); // true

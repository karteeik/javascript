// Error handling is the process of detecting, catching, and responding to errors in your code so that your program doesn't crash or behave unexpectedly.

// Why do errors happen?

// Wrong code logic
// Failed API requests
// Undefined variables
// Network issues
// User input mistakes

// JavaScript provides 3 main ways to handle errors :

// 1. Using try...catch block
try {
  // code that might throw an error
} catch (error) {
  // code that runs if an error occurs
}

try {
  const name = "Karik";
  console.log(name.toUpperCase());
  let result = 10 / a; // ❌ 'a' is not defined
} catch (error) {
  console.log("An error occurred:", error.message);
}

// 2. Using .catch() with Promises
fetch("https://icanhazdadjoke.com/", {
  headers: { Accept: "application/json" },
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error.message);
  });

// 3. Using try...catch with async/await
(async () => {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });
    const data = await response.json();
    console.log(data.joke);
  } catch (error) {
    console.log("Fetch Failed:", error.message);
  }
})();

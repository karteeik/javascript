// A Promise in JavaScript is a special object that represents a future value — something that will complete later (either successfully or with an error)

// Why Do We Need Promises?
// Because JavaScript is asynchronous — it doesn't wait for slow things like:
// Fetching data from the internet
// Waiting for a file to load
// Using setTimeout()

// Before promises, we used callback functions to handle this — but they often led to callback hell

// Syntax -
// const promise = new Promise(function (resolve, reject) {
//    async task
// });

// new Promise - promise constructor
// function - Executor function
// resolve - function to call on successful completion of an operation 
// reject - function to call if an operations fails (error)

// Promise States
// A Promise goes through 3 states:
// | State       | Meaning                              |
// | ----------- | ------------------------------------ |
// | `pending`   | Still waiting                        |
// | `fulfilled` | Successfully completed (`resolve`)   |
// | `rejected`  | Failed with an error (`reject`)      |

// | Argument  | Purpose                           |
// | --------- | --------------------------------- |
// | `resolve` | Call this when task **succeeds**  |
// | `reject`  | Call this when task **fails**     |

// Summery of How to Use Promises
// 1. Create a Promise
// const promise = new Promise((resolve, reject) => {
//   // do something
// });

// // 2. Handle result
// promise
//   .then(result => {
//     // success
//   })
//   .catch(error => {
//     // failure
//   });

// What Are .then() and .catch() in Promises?

// successfully → use .then()
// with an error → use .catch()

// Simple Example

// const myPromise = new Promise((resolve, reject) => {
//   const success = false;

//   if (success) {
//     resolve("Task Completed....");
//   } else {
//     reject("Task Rejected");
//   }
// });

// // if you'e add directlly atteched to creation of promises
// myPromise
// .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function (){
//     console.log("This part is Finally Execute");
//   })

// Why Promises are Better Than Callbacks:
// | Callback Hell            | Promises                      |
// | ------------------------ | ----------------------------- |
// | Messy and nested         | Clean and chainable `.then()` |
// | Hard to handle errors    | `.catch()` handles all errors |
// | Not reusable or readable | More structured and readable  |

// The Task - Get user info → Get orders for that user → Calculate total → Show total

// 1. Using Callbacks
// function getUser(callback) {
//   setTimeout(() => {
//     callback({ id: 1, name: "Kartik" });
//   }, 1000);
// }

// function getOrders(userId, callback) {
//   setTimeout(() => {
//     callback([100, 200, 300]);
//   }, 1000);
// }

// function calculateTotal(orders, callback) {
//   setTimeout(() => {
//     const total = orders.reduce((a, b) => a + b, 0);
//     callback(total);
//   }, 1000);
// }

// // Callback Hell starts here
// getUser(function(user) {
//   getOrders(user.id, function(orders) {
//     calculateTotal(orders, function(total) {
//       console.log("Total is:", total); // "Total is: 600"
//     });
//   });
// });

// 2. Using Promises
// function getUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id: 1, name: "Kartik" });
//     }, 1000);
//   });
// }

// function getOrders(userId) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([100, 200, 300]);
//     }, 1000);
//   });
// }

// function calculateTotal(orders) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const total = orders.reduce((a, b) => a + b, 0);
//       resolve(total);
//     }, 1000);
//   });
// }

// // Chain Promises
// getUser()
//   .then(user => getOrders(user.id))
//   .then(orders => calculateTotal(orders))
//   .then(total => console.log("Total is:", total))  // 600
//   .catch(err => console.log("Error:", err));

// Using Promises fetch data

// async function getUserData() {
//   let showData = await fetch('https://jsonplaceholder.typicode.com/posts');
//   console.log(await showData.json()); 
// }
// getUserData();

// Promises Method
// 2. Promise.all()
// Promise.race()
//  Promise.allSettled()
// 5. Promise.any() (✅ ES2021)
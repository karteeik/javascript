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
//     console.log("This Part is Always Executed...");
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

// Promises Method
// 1. Promise.all()
// When you want to wait for all promises to complete successfully, reject state will throw an error
const promise1 = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("promise resolve1");
    } else {
      reject("promise rejected1");
    }
  }, 2000);
});

// const promise2 = new Promise((resolve, reject) => {
//   let success = true;

//   setTimeout(() => {
//     if (success) {
//       resolve("promise resolve2");
//     } else {
//       reject("promise rejected2");
//     }
//   }, 2000);
// });

const promise2 = new Promise((resolve, reject) => {
  let success = false;

  setTimeout(() => {
    if (success) {
      resolve("promise resolve2");
    } else {
      reject("promise rejected2");
    }
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("promise resolve3");
    } else {
      reject("promise rejected3");
    }
  }, 2000);
});

// promise1.then(function (result) {
//   console.log(result);
// });
// promise2.then(function (result) {
//   console.log(result);
// });
// promise3.then(function (result) {
//   console.log(result);
// });

// This is long process but we use all method

// Promise.all([promise1,promise2, promise3]).then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// });

// Note - setTimeout Limit is Maximum 

// 2. Promise.allSettled()
// its return all resolve and reject promises
Promise.allSettled([promise1,promise2, promise3]).then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});

// 3. Promise.race()
// Returns the first settled (fulfilled or rejected) promise.
const slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 2000));
const fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 1000));

Promise.race([slow, fast]).then(result => {
  console.log(result); // "Fast"
});

// 5. Promise.any()
// it's Return First Successfull Result
// const p1 = Promise.reject("Fail");
// const p2 = Promise.resolve("Win");
// const p3 = Promise.resolve("Also Win");

// Promise.any([p1, p2, p3])
//   .then(result => console.log(result)) // "Win"
//   .catch(error => console.log('All failed:', error));
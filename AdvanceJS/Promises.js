// A Promise in JavaScript is a special object that represents a future value — something that will complete later (either successfully or with an error)

// Why Do We Need Promises?
// Because JavaScript is asynchronous — it doesn't wait for slow things like:
// Fetching data from the internet 
// Waiting for a file to load 
// Using setTimeout() 

// Before promises, we used callback functions to handle this — but they often led to callback hell 

// Syntax -
// const promise = new Promise(function (resolve, reject) {
  // async task
// });

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

// Why Promises are Better Than Callbacks:
// | Callback Hell            | Promises                      |
// | ------------------------ | ----------------------------- |
// | Messy and nested         | Clean and chainable `.then()` |
// | Hard to handle errors    | `.catch()` handles all errors |
// | Not reusable or readable | More structured and readable  |

// The Task - Get user info → Get orders for that user → Calculate total → Show total

// Using Callbacks
function getUser(callback) {
  setTimeout(() => {
    callback({ id: 1, name: "Kartik" });
  }, 1000);
}

function getOrders(userId, callback) {
  setTimeout(() => {
    callback([100, 200, 300]);
  }, 1000);
}

function calculateTotal(orders, callback) {
  setTimeout(() => {
    const total = orders.reduce((a, b) => a + b, 0);
    callback(total);
  }, 1000);
}

// 👇 Callback Hell starts here
getUser(function(user) {
  getOrders(user.id, function(orders) {
    calculateTotal(orders, function(total) {
      console.log("Total is:", total); // 👉 "Total is: 600"
    });
  });
});


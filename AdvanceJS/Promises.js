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

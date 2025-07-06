// Synchronous JavaScript
// One line at a time, in order --> Every line waits for the previous one to finish.
// JavaScript is single-threaded, so by default, it runs code line by line, top to bottom, and waits for each line to finish.

// Asynchronous JavaScript
// JS can handle long tasks (like API calls, timers, file reading) without waiting for them to finish.
// Instead, it uses callbacks, promises, or async/await to continue running other code while the task finishes in the background.

//  Feature          | Synchronous JS      | Asynchronous JS                          
//  ---------------------------------------------------------------------------------- 
//  Execution Order  | One line at a time  | Can skip waiting tasks                   
//  Waits for tasks? | Yes                 | No                                       
//  Example          | `console.log()`     | `setTimeout()`, `fetch()`, `async/await` 
//  Good For         | Simple tasks        | Network calls, delays, heavy tasks       
//  Blocking?        | Yes (can freeze UI) | No (non-blocking)                        

// Synchronous JavaScript
// const Second = () => {
//      console.log("Second Function is Starts and Ends....");
// };

// const First = () => {
//     console.log("First Function is Started....");
//     Second();
//     console.log("First Function is Ends....");
// };

// First();     

// Asynchronous JavaScript
const Second = () => {
    // Asynchronous Operation & behaviour
    setTimeout(() => {
        console.log("Second Function is Starts and Ends....");
    }, 1000);
};

const First = () => {
    console.log("First Function is Started....");
    Second();
    console.log("First Function is Ends....");
};

First();

// Types of Async Operations/Behavior in JavaScript

// Timers - setTimeout(), setInterval()
// Network Requests - fetch(), XMLHttpRequest, axios
// File System Operations (Node.js) - fs.readFile(), fs.writeFile() (asynchronous versions)
// Event Listeners
// Promises
// Async / Await

// All async operations in JavaScript are managed by the Event Loop, which works with:
// Call Stack (executes sync code)
// Web APIs / Node APIs (handle async tasks)
// Callback Queue (schedules async tasks)
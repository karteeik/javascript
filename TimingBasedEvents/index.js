// JavaScript is single-threaded and uses a mechanism called the event loop to handle asynchronous operations like setTimeout() and setInterval(). These timing functions allow you to schedule code to run: Once after a delay → setTimeout() / Repeatedly at intervals → setInterval()

// List of Timing Based Events
// setTimeout() - Run Code After Delay
// setinterval() - Run Repeatedly at Intervals
// clearTimeout() - Cancel a Timeout
// clearInterval() - Cancel an Interval 

// setTimeout() - Run Code After Delay
// Syntax - setTimeout(callback, delay, ...args);
// function Delayfunction(){
//     console.log("Function Runs After 2 Seconds");
// };
// setTimeout(Delayfunction,2000);     //1 Seconds = 1000 MilliSeconds

// clearTimeout() - Cancel a Timeout
// clearTimeout(Delayfunction());

// setinterval() - Run Repeatedly at Intervals
// Syntax - setInterval(callback, interval, ...args);
setInterval(() => {
  console.log("This runs every 1 second");
}, 1000);

// clearInterval() - Cancel an Interval 
const interval = setInterval(() => {
  console.log("Repeating...");
}, 1000);

setTimeout(() => {
  clearInterval(interval); // Stops after 5 seconds
  console.log("Stopped repeating");
}, 5000);


// Write a Function to Show 3 Seconds Countdown Timer
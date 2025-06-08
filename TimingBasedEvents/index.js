// JavaScript is single-threaded and uses a mechanism called the event loop to handle asynchronous operations like setTimeout() and setInterval(). These timing functions allow you to schedule code to run: Once after a delay → setTimeout() / Repeatedly at intervals → setInterval()

// List of Timing Based Events
// setTimeout() - Run Code After Delay
// setinterval() - Run Repeatedly at Intervals
// clearTimeout() - Cancel a Timeout
// clearInterval() - Cancel an Interval 

// 1 - setTimeout() - Run Code After Delay
// Syntax - setTimeout(callback, delay, ...args);
// Uses - Hide popup
function Delayfunction(){
    console.log("Function Runs After 2 Seconds");
};
setTimeout(Delayfunction,2000);     //1 Seconds = 1000 MilliSeconds

// 2 - setinterval() - Run Repeatedly at Intervals
// Syntax - setInterval(callback, interval, ...args);
// Uses - Dashboard polling
setInterval(() => {
  console.log("This runs every 1 second");
}, 1000);

// clearTimeout() - Cancel a Timeout
// Syntax - clearTimeout(timeoutID);
// Uses - Cancel auto-logout 
function clrTime(){
  console.log("clear setTimeout functionality");
}
const clrTimeID = setTimeout(clrTime,1000);
clearTimeout(clrTimeID);

// clearInterval() - Cancel an Interval 
// Syntax - clearInterval(intervalID);
// Uses - Countdown timer
function intervalFun(){
  console.log("This Function Repeat Every 1 Second");
};
intervalFun();

const intervalID = setInterval(intervalFun,1000);
setTimeout(()=>{
  clearInterval(intervalID);
},5000);

// Write a Function to Show 3 Seconds Countdown Timer

let second = 5;
let timer = setInterval(() => {
  console.log(`Your Time is ${second} Left`);
  second--;

  if(second<=0){
    clearInterval(timer);
    console.log('Time is up');
  }
},1000);
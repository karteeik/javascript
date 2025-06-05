// The Date object in JavaScript is used to work with dates and times. It allows you to 
//     Get the current date/time
//     Create specific dates
//     Format dates
//     Compare or manipulate dates
//     Do calculations like date differences
//     Under the hood, the Date object represents a timestamp
// the number of milliseconds since January 1, 1970, 00:00:00 UTC (called the Unix Epoch).

// new Date()
// current date and time ISO 8601 format UTC(Coordinated Universal Time)
// but this run on console that it returns Indian Standard Time
const now = new Date(); 
console.log(now); 

// 3 Types of JavaScript date inout formats
// ISO Date	"2015-03-25" (The International Standard)
// Short Date "03/25/2015"
// Long Date "Mar 25 2015" or "25 Mar 2015"

// | Environment | Output Format   | Timezone | Why Different? |
// | ----------- | --------------- | -------- | -------------- |
// | **Node.js** | `toISOString()` | UTC      | Clean for logs |
// | **Browser** | `toString()`    | Local    | Friendly view  |

const date1 = new Date("2025-02-23");
console.log(date1);


// new Date(date string)
const dateString = "2025-06-05";
const dateToString = new Date(dateString);
console.log(dateToString);

let dateStr = "October 13,2023";
let dateToStr = new Date(dateStr);
console.log(dateToStr);


// new Date(year,month)
const yearMonth = new Date(2025,5);  //if you passed in Date constructor than first is year and second is month 0 to 11
console.log(yearMonth);


// new Date(year,month,day)
const yMD = new Date(2025,11,4); 
console.log(yMD);

// new Date(year,month,day,hours)
const yearToHours = new Date(2025, 3, 5, 11);
console.log(yearToHours);

// new Date(year,month,day,hours,minutes)
const yearToMinutes = new Date(2025, 3, 5, 11, 32);
console.log(yearToMinutes);

// new Date(year,month,day,hours,minutes,seconds)
const yearToSecond = new Date(2025, 3, 5, 11, 32, 56);
console.log(yearToSecond);

// new Date(year,month,day,hours,minutes,seconds,ms)    -not work
const yearToMS = new Date(2025, 3, 5, 11, 32, 56, 3432);
console.log(yearToMS);

// new Date(milliseconds)
// One day (24 hours) is 86 400 000 milliseconds.
const dateMS = new Date(100000000000);
console.log(dateMS);

// get date to use milliseconds
const getMStoTime = new Date(1749147420673);
console.log(getMStoTime);


// Date Methods
const d1 = new Date(); 
console.log(d1.toString()); //by default in console
console.log(d1.toDateString()); //only date
console.log(d1.toUTCString()); //GMT
console.log(d1.toISOString());   // "2025-06-04T17:30:00.000Z"


// get methods
const d = new Date();
console.log(d.getFullYear());  
console.log(d.getMonth());      // 0 to 11
console.log(d.getDate());       
console.log(d.getDay());       // 0 to 6
console.log(d.getHours());        
console.log(d.getMinutes());        
console.log(d.getSeconds());        
console.log(d.getMilliseconds());        
console.log(d.getTime());        // it's returns the number of milliseconds since January 1, 1970:


d.setFullYear(2025);
d.setMonth(0);  // Month Count 0 to 11
d.setDate(23);

console.log(d.toDateString());
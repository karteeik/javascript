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
console.log(d1.toLocaleString());
console.log(d1.toLocaleDateString());
console.log(d1.toLocaleTimeString());

// to get milliseconds of UTC format / gettime() other method
const getMS = new Date();
const getparse = Date.parse(getMS);
console.log(getparse);


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

// You cannot use it on a date object like myDate.now().
// syntax - Date.now().
console.log(Date.now());    // same as gettime 

// set methods - warning - you'r not set day
// setDate()	Set the day as a number (1-31)
const d2 = new Date();
d2.setDate(23);    

// setFullYear()	Set the year (yyyy)
d2.setFullYear(2025);    

// setHours()	Set the hour (0-23)
d2.setHours(3);

// setMilliseconds()	Set the milliseconds (0-999)
// d2.setMilliseconds(211);

// setMinutes()	Set the minutes (0-59)
d2.setMinutes(56);

// setMonth()	Set the month (0-11)
d2.setMonth(10);

// setSeconds()	Set the seconds (0-59)
d2.setSeconds(34);

// setTime()	Set the time (milliseconds since January 1, 1970)
// d2.setTime();

console.log(d2.toString());


// Write function to add  a specified number of days to a given date.

const addDaysToDay = (date,extra) => {
    const updatedDate = date.setDate(date.getDate() + extra);
    return new Date(updatedDate);
};

const date = new Date();
const newDate = addDaysToDay(date,12);
console.log(newDate.toLocaleDateString());


// Write function to find different between two dates

const findDifference = (date01,date02) => {
    let oneDay = 24 * 60 * 60 * 1000;   //milliseconds in 1 day
    let diffMs = Math.abs(date01 - date02);
    return Math.ceil(diffMs/oneDay);;
};

const date01 = new Date('2024-03-23');
const date02 = new Date('2024-03-28');
console.log(findDifference(date01,date02));

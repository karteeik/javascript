// The Date object in JavaScript is used to work with dates and times. It allows you to 
//     Get the current date/time
//     Create specific dates
//     Format dates
//     Compare or manipulate dates
//     Do calculations like date differences
//     Under the hood, the Date object represents a timestamp
// the number of milliseconds since January 1, 1970, 00:00:00 UTC (called the Unix Epoch).

const now = new Date(); // current date and time
console.log(now); 

const d1 = new Date("2025-06-04"); // ISO format (YYYY-MM-DD)
console.log(d1.toString());

const d = new Date();

console.log(d.getFullYear());   // 2025
console.log(d.getMonth());      // 5 (June)
console.log(d.getDate());       // 4
console.log(d.getDay());        // 3 (Wednesday)
console.log(d.toDateString());  // "Wed Jun 04 2025"
console.log(d.toISOString());   // "2025-06-04T17:30:00.000Z"

d.setFullYear(2025);
d.setMonth(0);  // Month Count 0 to 11
d.setDate(23);

console.log(d.toDateString());

const bDate = new Date(24,4,17,11,44);
console.log(bDate);

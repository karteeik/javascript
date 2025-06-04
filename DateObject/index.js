const now = new Date(); // current date and time
console.log(now); 

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
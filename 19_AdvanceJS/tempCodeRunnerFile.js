// 5. Promise.any()
// it's Return First Successfull Result
const p1 = Promise.reject("Fail");
const p2 = Promise.resolve("Win");
const p3 = Promise.resolve("Also Win");

Promise.any([p1, p2, p3])
  .then(result => console.log(result)) // "Win"
  .catch(error => console.log('All failed:', error));
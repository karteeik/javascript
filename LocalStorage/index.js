// // The localStorage object allows you to save key/value pairs in the browser 
// // localStorage.setItem("name","kartik"); 
// // localStorage.getItem("name"); 
// // localStorage.removeItem("name"); 
// // localStorage.clear();

// // JSON Stringify used  to convert json data to string 
// // JSON.stringify(value, replacer, space)

// const obj = { name: "Alice", age: 25 };
// // const jsonString = JSON.stringify(obj);
// // console.log(jsonString);
// // Output: '{"name":"Alice","age":25}'
// const jsonString = JSON.stringify(obj, null, 2);
// console.log(jsonString);
// /* Output:
// {
//   "name": "Alice",
//   "age": 25
// }
// */
const obj = { name: "Alice", age: 25, password: "secret" };
const jsonString = JSON.stringify(obj, (key, value) => {
  if (key === "password") return undefined;
  return value;
});
console.log(jsonString);
// Output: '{"name":"Alice","age":25}'
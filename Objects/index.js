// JavaScript Object - An object is a collection of key-value pairs
// The key is always a string (or symbol).
// The value can be any data type: string, number, array, function, another object, etc.
// Syntax - const obj = {};

// let car = new Object();
// car.brand = "Toyota";
// car.model = "Innova";

let person = {
    name: "Kartik",
    age: 25,
    "is'Developer": true,
    greet: function(){
        console.log("This is known as Object Method");
    },
};

// console.log(person);
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// Access Object Properties Using Dot Notation and Square Bracket Notation
// console.log(person.name);
// console.log(person["age"]);
// console.log(person["is'Developer"]);
// console.log(person[`is'Developer`]);    //Using Back Ticks

// Adding Properties
person.job = "MERN Developer";
// person["job"] = "MERN Developer";
// console.log(person);

// Modifying Properties
// person.age = 21;
person["age"] = 21;
console.log(person);

// Methods - Methods in Objects are Function associated with the Object
person.greet();

// adding dynamic keys in Objects
// dynamic key is Unique Value to represent Identity. This is useful when the key is stored in a variable or generated at runtime
const idType = "collegeID";
let Student = {
    [idType]: "A123456",  //dynamic key using must []
    sName: "john",
    sAge: 21,
    isStudent: true,
    sInfo: function(){
        console.log(`Hey, my ${idType} is ${Student[idType]} and my name is ${Student.sName} or age is ${Student.sAge}`);
    },
}
Student.sInfo();

// Data Modeling 
// Data modeling is the process of designing and organizing data for a system 
const user = {
    id: 101,
    name: "Kartik Mangukiya",
    email: "kartik@example.com",
    isPremium: true,
    address: {
        city: "Surat",
        state: "Gujarat",
        pincode: "395007"
    },
    orders: [1001, 1002, 1003] // references to order IDs
};
console.log(user);
console.log(user.address);
console.log(user.orders);

// Data Model 1
const product = {
    id: 501,
    name: "Bluetooth Speaker",
    price: 2999,
    category: "Electronics",
    inStock: true,
    tags: ["music", "wireless", "portable"]
};

// Data Model 2
const post = {
    id: 301,
    title: "What is Data Modeling?",
    body: "Data modeling is the process...",
    author: {
        id: 21,
        name: "Kartik"
    },
    tags: ["database", "javascript", "design"],
    comments: [
        { userId: 22, text: "Very helpful!" },
        { userId: 23, text: "Great explanation!" }
    ]
};
console.log(post.comments[0].userId);
console.log(post.comments[0].text);

// Passed by Value: When you pass a primitive value to a function, a copy of the value is passed. Changes made inside the function do not affect the original variable.

// Used for primitive data types:
// Number, String, Boolean, null, undefined, Symbol, BigInt

let a=10;
function PassByValue(x) {
    x=20;
    console.log(x);   
}
PassByValue(a);
console.log(a);     //x is just a copy of a, so changing x does not affect a

// Passed by reference: When you pass an object or array, you're passing a reference to the same memory location.So changes inside the function will affect the original object.

// Used for non-primitive data types (objects, arrays, functions)

let obj = {name: "john"};

function PassByReference(obj1) {
    obj1.name = "due";
    console.log(obj1);
}
PassByReference(obj);
console.log(obj);   //The function modified the original object because it received a reference to it.

// Important Clarification-----------------------------------------------------------------

// In JavaScript, everything is technically passed by value
// But for objects/arrays, the value being passed is a reference — so you still get reference-like behavior.

let obj0 = {name: "arnab"};

function ReassignValue(o) {
    o = {name: "pratap"};
    console.log(o);
}
ReassignValue(obj0);
console.log(obj0.name);
// Why not changed? Because o now points to a new object. The original reference is unchanged.

// | Data Type      | Passing Type      | Behavior                                          |
// | -------------- | ----------------- | ------------------------------------------------- |
// | Primitive      | Pass by value     | Function gets a copy; original unchanged          |
// | Object / Array | Pass by reference | Function gets reference; original can be modified |

// Object.assign() in JavaScript
// Object.assign() is a built-in method used to copy properties from one or more source objects into a target object.
// Syntax - Object.assign(target, ...sources)
// target: The object that will receive properties.
// sources: One or more objects whose properties will be copied to the target.

// Basic Usage
const target = {a: 10};
const sources = {b: 20,c: 30};

const result = Object.assign(target,sources);
console.log(target);
console.log(sources);
console.log(result);

console.log(target == result);  //true because target assign result not new object


// Cloning Objects (Shallow Copy)
const original = {name: "dev", age: 20};
const clone = Object.assign({},original);
const clone0 = clone;  

console.log(original);
console.log(original == clone); //false because new object
console.log(clone == clone0);   //true because same object reference assign

// JavaScript Object
const users = {
  name: "Kartik",
  age: 25,
  isAdmin: true,
  greet: function () {
    console.log("Hello");
  }
};
// Can include functions, methods, undefined, etc.
// Used in your code directly

// JSON - JavaScript Object Notation
// {
//   "name": "Kartik",
//   "age": 25,
//   "isAdmin": true
// }
//  No functions
//  All keys must be in double quotes
//  Pure data only
//  Used in API communication, config files, storage (localStorage)

// Convert Between Object and JSON
const ob = { name: "Kartik", age: 25 };
const jsonStr = JSON.stringify(ob);
console.log(jsonStr); // '{"name":"Kartik","age":25}'

const jsonStr = '{"name":"Kartik","age":25}';
const obj = JSON.parse(jsonStr);
console.log(obj); // { name: "Kartik", age: 25 }




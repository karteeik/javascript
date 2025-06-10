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
// dynamic key is Unique Value to represent Identity
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

const product = {
    id: 501,
    name: "Bluetooth Speaker",
    price: 2999,
    category: "Electronics",
    inStock: true,
    tags: ["music", "wireless", "portable"]
};


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

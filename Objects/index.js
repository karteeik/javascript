// JavaScript Object - An object is a collection of key-value pairs
// The key is always a string (or symbol).
// The value can be any data type: string, number, array, function, another object, etc.
// Syntax - const obj = {};

let person = {
    name: "Kartik",
    age: 25,
    "is'Developer": true,
    greet: function(){
        console.log("This is known as Object Method");
    },
};

console.log(person);

// Access Object Properties Using Dot Notation and Square Bracket Notation
console.log(person.name);
console.log(person["age"]);
console.log(person["is'Developer"]);
console.log(person[`is'Developer`]);    //Using Back Ticks

// Adding Properties
// person.job = "MERN Developer";
// person["job"] = "MERN Developer";
// console.log(person);

// Modifying Properties
// person.age = 21;
person["age"] = 21;
console.log(person);

// Methods - Methods in Objects are Function associated with the Object
person.greet();

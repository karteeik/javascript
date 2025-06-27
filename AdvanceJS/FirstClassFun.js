// First Class Function - Functions are treated like any other value — like numbers, strings, or objects.

// So in js, We can 
// Store functions in variables

const myFun = function(){
    console.log("Hello");
};
myFun();

// Pass functions as arguments

function sayHello(){
    console.log("Hello, john");
};

function callFun(Fun){
    Fun();
};

// sayHello();
callFun(sayHello);

// Return functions from other functions

function greet(){
    return function(){
        console.log("I am is Here!");
    }
};

const getFun = greet();
getFun();

// Because of this, functions are first-class citizens in JavaScript.

// 1. Higher Order Function - 
// A Higher-Order Function is a function that either:
// Takes another function as an argument,
// Returns another function,
// Or does both.

function userInput(name,callBack){      //callBack means greeting Function
    console.log("User Input: " + name);
    callBack(name);
};

function greeting(name){
    console.log(`Hello, ${name}`);  
};

userInput("john",greeting);
// Here, UserInput is Higher Order Function because it Takes greeting function (Callback Function) as an argument

// Callback Function - A function passed as an argument to another function, which is then called (or "called back") later.

function sayHello(name) {
  console.log("Hello, " + name);
}

function greetUser(callback) {
  const username = "Kartik";
  callback(username);  // calling back the function
}

greetUser(sayHello);    // Here, sayHello is Callback Function and greetUser is Function that Calls back sayHello

// Why use callbacks?
// To run code after something finishes Like a delay, animation, or fetch
// To make code flexible You can give any function as a callback



// this refers to the object that is executing the current function.
// But the meaning of this changes based on how and where the function is called..........

// 1. this in Global Scope
console.log(this);  // In browser: Window object

// 2. this Alone in Function
// function show() {
//     console.log(this);
// }
// show();
// In browser: Window object

// 3. this in an Object Method
const user = {
  name: "Kartik",
  greet: function() {
    console.log(this.name);
  }
};
user.greet(); // "Kartik"  this refers to the object (user) that owns the method.

// 4. this in Arrow Functions
const users = {
  name: "Kartik",
  greet: () => {
    console.log(this.name);
  }
};
users.greet(); // undefined   In arrow functions, this is not bound to the object. Instead, it takes this from the surrounding scope (lexical scope).

// 5. this in Constructor Functions
// function Person(name) {
//   this.name = name;
// }

// const p1 = new Person("Kartik");
// console.log(p1.name); // "Kartik"

// 6. this in Class
// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Hi, I'm ${this.name}`);
//   }
// }

// const u1 = new User("Kartik");
// u1.greet(); // "Hi, I'm Kartik"

//  7. this in Event Listeners (DOM)
// document.getElementById("btn").addEventListener("click", function() {
//   console.log(this); // Button element
// });

// 8. this with call(), apply(), bind()
function show() {
  console.log(this.name);
}

const person = { name: "Kartik" };

show.call(person);  // Kartik
show.apply(person); // Kartik

const newFn = show.bind(person);
newFn(); // Kartik


// Scope - Scope determines where variables, functions, and objects are accessible in your code.

// 1 - Global Scope (Entire Mall)
// Declared outside of any function or block & Accessible everywhere in your code.

// 2 - Function Scope (Specific Shop)
// Variables declared inside a function are only accessible inside that function.
function testVar() {
  if (true) {
    var a = 10;
  }
  console.log(a); // 10 accessible outside if-block bcos var is function scope
}

testVar();

// 3 - Block Scope (ES6+) (Storage Room inside the Shop)
// introduced with let and const.
// Variables declared inside {} are only accessible inside that block.

// Global Scope
const globalVar = "Global Variable";

function myFun() {
  // Function Scope
  const functionVar = "Function Variable";
  if (true) {
    // Block Scope
    const blockVar = "Block Variable";
    console.log(globalVar);
    console.log(functionVar);
    console.log(blockVar);
  }
  console.log(globalVar); // "Global Variable"
  console.log(functionVar); // "Function Variable"
  // console.log(blockVar);       // ReferenceError
}
console.log(globalVar); // "Global Variable"
// console.log(functionVar);    // ReferenceError
// console.log(blockVar);       // ReferenceError

myFun();

// 4 - Lexical Scope (Static Scope - the rule that guides scope access)
// A function can access variables from its parent scope, even if it's nested.

function outer() {
  let b = 10;

  function inner() {
    console.log(b);
  }
  inner();
}

outer();

// When you try to access a variable -
// JS looks in the current scope, then moves to the outer (parent) scope, continues until it reaches the global scope.If not found, it throws: ReferenceError.

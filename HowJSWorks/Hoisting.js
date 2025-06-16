// Memory Space for Variables & Function known as Hoisting
// Hoisting in JavaScript is a behavior where variable and function declarations are moved (or "hoisted") to the top of their scope (either the global scope or the function scope) during the compilation phase, before the code is executed.

// var a;
console.log(a);
var a = 10; // An internally moved to the top(Hoisted).
// Only declarations are hoisted, not initializations.
// var is hoisted and initialized with undefined.

// Function declarations are hoisted completely
greet();
function greet() {
  console.log("Hello");
}

// Function Expressions are not hoisted fully
// sayhi();

var sayhi = function () {
  console.log("hi");
};

// TypeError - sayhi is not function

// Temporal Dead Zone (TDZ)
// When using let or const  there's a period between hoisting and declaration where accessing the variable gives an error.

console.log(x);
let x=10;

console.log(y);
const y=20;
// both are ReferenceError

// | Keyword         | Hoisted? | Initialized? | Access before declaration   |
// | --------------- | -------- | ------------ | --------------------------- |
// | `var`           | ✅        | `undefined`  | Allowed (returns undefined) |
// | `let` / `const` | ✅        | ❌ (TDZ)      | ❌ ReferenceError            |
// | Function Decl.  | ✅        | ✅            | ✅                           |
// | Function Expr.  | ✅ (name) | ❌            | ❌ TypeError                 |

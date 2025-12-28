// A function in JavaScript is a reusable block of code designed to perform a specific task. It helps in code reusability, modularity, and readability
// function sum(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z) /*parameters*/{
//     return a+b+c+d+e+f+g+h+i+j+k+l+m+n+o+p+q+r+s+t+u+v+w+x+y+z;
// }
// console.log(sum(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26));
// console.log(sum(24,87,3,4,4,4,5,6,7,8,5,4,3,2,4,5,6,7,7,6,5,4,3,4,5,6));
// console.log(sum(34,57,3,4,5,6,6,4,5,5,6,8)); /*arguments */

// function greet(name){
//     console.log("hello "+name+", welcome to the world !")
// }
// greet(prompt("enter your name : "));

// Function Expression - (1)named function (2)Anonymous Function Expression
// A function expression involves creating a function and assigning it to a variable. This function can be anonymous (without a name) or named.

// (1)named function
// let result = function sum(a,b){
//     console.log(a+b);
// };
// result(2,3);

// (2)anonymous function expression - noName of function store in one variable
// let show=function(a,b){
//     console.log(a+b);
// };
// show(2,3);

// default parameter
function sum(a, b = 10) {
  //default parameter
  console.log(a + b);
}
sum(5, 15);

// IIFE - (immedately invoked function expression)

// simple function
// (function(){
//     console.log("hello world");
// })();

// (function(){
//     console.log("hello, world");
// })();

// let result=(function(){
//     console.log("hello, world");
//     return "hello, world";  //if you return string than it store in function expression
// })();
// console.log(result)

(function (a, b) {
  console.log(a + b);
})(61, 26);

let show = (function (a, b) {
  return a + b;
})(12, 32);

console.log(show);

// fat arrow function
// syntax- const functionName = (parameter1, parameter2, ...) => {
// Function body
// };

// (i) - you don't need to write function keyword
const select = (a, b) => {
  console.log(a + b);
};
select(21, 23);

// it's one line function
// const result=(a,b)=>`${a} and ${b} sum is ${a+b}`;
// console.log(result(2,33));

// (ii) - if you passed one parameter in fat arrow function than no need to show parentheses()
const sqr = (a) => {
  console.log(`sqr is ${a * a}`);
};
sqr(10);

//(iii) - if you have passed no argument than only show parentheses()
const greet = () => {
  console.log("hello, world");
};
greet();

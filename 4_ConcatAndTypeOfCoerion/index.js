// concatenation in javascript
// "+" operator used to join two string

// some quiz
console.log("java"+"script")    //This is concatenation in js using + sign
console.log("java"-"script") //Nan
console.log(16+4+"java")    // String + Number → String
console.log(true+true)
console.log(true+false)
console.log(false-true)
console.log(true-false)
console.log(""+0)
console.log(""+"")
console.log(9-"5")  // Number - String → Number
console.log(10+9+"john")
console.log("34"-6)
console.log("34"+6)  //implicit



// type coercion
// (1)implicit(automatically)-uses of operator
// (2)explicit(by programmer)-uses of function

// let num = 123;
// let str = String(num);  
// console.log(str)  //explicit

let str = "123";
let num = Number(str);  // 123
console.log(num)

let float = parseFloat("123.45");  // 123.45
let int = parseInt("123", 10);  // explicit
console.log(int);

console.log(null == undefined);  // true
console.log('0' == 0);  // true - because of coercion
console.log('0' === 0);  // false - different types
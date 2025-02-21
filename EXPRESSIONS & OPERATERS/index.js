// 5 + 15 -5 and 15 are operand, '+' is operator and (5+15) are expression
// there are many types of operator in javascript
// (1) assignment operator
// when we initialize var then use (=) operator
var x = 10; 

let a = 10;
a += 5; //a = a + 5; a is now 15

let b = 20;
b -= 4; //b = b - 4; b is now 16

let c = 3;
c *= 7; //c = c * 7; c is now 21

let d = 24;
d /= 6; //d = d / 6; d is now 4

let e = 29;
e %= 5; //e = e % 5; e is now 4

let f = 2;
f **= 3; //f = f ** 3; f is now 8


// (2) arithmetic operator
// console.log(10+5)  
// console.log(10-5)  
// console.log(10*5)  
// console.log(10/5)  
// console.log(10%5)  

// (3) comparison operator - return true or false
// console.log(5==5)
// console.log(5==="5")
// console.log(5!=5)
// console.log(5!==5)
// console.log(5<6)
// console.log(5>6)
// console.log(5>=6)
// console.log(5<=5)

// (4) logical operator (logical and-&& , logical or-|| , logical not-!)
// console.log( 5>3 && 3<5 )
// console.log( 5>9 || 7<5 )
// console.log( 5>9 || 7!=5 )

// (5) string operator
// var str1="hello";
// var str2="world";
// console.log(str1+" "+str2)

// var age=50;
// console.log("age : "+age)

// (6) unary operator - [++,--,!]
// var x=5;
// x--  //postfix
// console.log(x)

// var x=5;
// --x  //prefix
// console.log(x)

// var y=5;
// y++  //postfix
// console.log(y)

// var y=5;
// ++y  //prefix
// console.log(y)

// let truthyValue = true;
// let falsyValue = !truthyValue; 
// console.log(falsyValue)

// let falseValue = 0;
// let trueValue = !falseValue;
// console.log(trueValue)

// (7) typeof operator
// var Name="john due";
// var age=90;
// console.log(typeof Name)
// console.log(typeof age)

// (8) ternary (conditional operator) -(?)true (:)false
// syntax: condition?true:false
console.log(8>3?"8 is greater than 3":"3 is lessthan 8")
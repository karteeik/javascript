// type of operator -> typeof var_name
// types of data type 
// (i) primitive data types
// (1)-String
var a="karan";
console.log(typeof a)

// (2)-Number
var a=30;
console.log(typeof a)

// (3)-Boolean
var a=true;
console.log(typeof a)
var b=false;
console.log(typeof a)

// (4)-undefined - only declare variable not assign value
var john;
console.log(john)

// (5)-null
var a=null
console.log(typeof a)

// (6)-BigInt
var a=100000000000000000000000000000000000000000000000000000000000000n;
console.log(typeof a)

// (7)-symbol
var a=Symbol("john due");
console.log(typeof a)

// (ii) object data types
// (1) an Object
// (2) an Array
// (3) a date

// how to convert string to number
// var Name="john";
// console.log(typeof +Name)
// console.log(typeof Number(Name))

// how to convert number to string
// var Age=30;
// console.log(typeof (Age+""))
// console.log(typeof String(Age))

// parseint()
// const myInt="210";
// const myNum=parseInt(myInt)
// console.log(myNum)
// console.log(typeof myNum)

// const myFloat="210.5";
// const myNume=parseInt(myFloat)
// console.log(myNum)
// console.log(typeof myNume)

// parsefloat
// const myOne="23.4";
// const mytwo=parseFloat(myOne)
// console.log(mytwo)

// extra example
// console.log("extra parseint example")
// console.log(parseInt("098"))
// console.log(parseInt("-234"))
// console.log(parseInt("&263"))
// console.log(parseInt("xyz"))
// console.log(parseInt("  897"))
// console.log(parseInt("213er"))

// Nan-not a number
console.log(parseInt("xyz")==parseInt("#$%"))  //false
// that's the reason of Nan==Nan is false

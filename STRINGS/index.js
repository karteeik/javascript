// A string in JavaScript is a sequence of characters used to represent text. It can include letters, numbers, symbols, and whitespace.
// string - string created with single or double quotes works the same.
const str1='john ';
const str2="rajat";
console.log(typeof str1)    //string
console.log(typeof str2)    //string

// Accessing Charactors
console.log(str1[0]);   // j


// // escape charactor 
// // (/')- for single quote
// // (/")- for double quote
// // (\\)- for back slace

const str01="hello, my name is \'ram\'";
console.log(str01);

const str02="hello, my name is \"ram \" ";
console.log(str02);

const str03="hello, my name is \\ ram ";
console.log(str03);

// templete string (`)symbol name is backticks

// You can embed variables or expressions using ${...}:
let str0="john";
let str00="due";
console.log(`hello my name is ${str0} and my surname is ${str00}`)   //variables

let a=10;
let b=20;
console.log(`sum is : ${a+b}`)  //expressions

let num=5;
console.log(`5 * ${num} = ${5 * num}`);

// Concatenation
let name = "ram";
let greeting = "Hello, " + name + "!";
console.log(greeting); 


// string Methods

let firstString = "har har mahadev     ";
console.log(firstString.length);   //21 (including space)

console.log(firstString.toLowerCase());

console.log(firstString.toUpperCase());

//Removes leading/trailing spaces
let cleanstr = firstString.trim();
console.log(cleanstr);
console.log(firstString.trimStart());
console.log(firstString.trimEnd());

//Checks if substring exists - return boolean value
console.log(firstString.includes("aha"));

//Checks if string starts with substring - return boolean value
console.log(firstString.startsWith("ha"));

//Checks if string ends with substring
console.log(firstString.endsWith("  "));   //end with some spaces

//Finds the index of a substring

//Extracts part of a string
//Similar to slice but doesn't allow negative indexes
//Replaces part of the string
// Converts string to array
// Repeats the string (n) times

// searching element
// indexof(searchstring)
// indexof(searchstring,position)
const text="satyam shivam satyam sundaram";
console.log(text.indexOf("sundaram",1));

// lastindexof(searchstring)
// lastindexof(searchstring,position)
console.log(text.lastIndexOf("satyam",15));

// array.from()
// console.log(Array.from(text));
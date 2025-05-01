// // string - string created with single or double quotes works the same.
// const str1='john  ';
// const str2="rajat";
// console.log(typeof str1)    //string
// console.log(typeof str2)    //string

// // string properties
// // length
// console.log(str1.length);   //4 (including space

// // escape charactor 
// // (/')- for single quote
// // (/")- for double quote
// // (\\)- for back slace

// const str3="hello, my name is \"ram\" ";
// console.log(str3);

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


// templete string (`)symbol name is backticks

// You can embed variables or expressions using ${...}:
let str1="john";
let str2="due";
console.log(`hello my name is ${str1} and my surname is ${str2}`)   //variables

let a=10;
let b=20;
console.log(`sum is : ${a+b}`)  //expressions

let num=5;
console.log(`5 * ${num} = ${5 * num}`);
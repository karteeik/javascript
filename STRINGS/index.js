// A string in JavaScript is a sequence of characters used to represent text. It can include letters, numbers, symbols, and whitespace.
// string - string created with single or double quotes works the same.
const str1='john ';
const str2="rajat";
console.log(typeof str1)    //string
console.log(typeof str2)    //string

// Accessing Charactors
console.log(str1[0]);   // j

// string are immutable you can't change characters directly
let str = "hello";
str[0] = "H"; //Doesn't work
console.log(str);
str = "Hello"; //Reassigning works
console.log(str);

// looping over string
for(let char of str){
    console.log(char);
}

// // escape charactor 
// // (/')- for single quote
// // (/")- for double quote
// // (\\)- for back slace

const str01="hello, my name is \'ram\'";
console.log(str01);

let str02="hello, my name is \"ram \" ";
console.log(str02);

// or other method
str02='hello, my name is "ram"';    //opposite single quote
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

let firstString = "har, har, mahadev     ";
console.log(firstString.length);   //(including space)

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

//Extracts part of a string
console.log(firstString.slice(1,5));

//Similar to slice but doesn't allow negative indexes
console.log(firstString.substring(1,5));

//Replaces part of the string
console.log(firstString.replace("mahadev","shambhu"));

// Converts string to array
console.log(firstString.split(","));

// Repeats the string (n) times
console.log(firstString.repeat(2));

// searching element 

// - Finds the index of a substring
// indexof(searchstring)
// indexof(searchstring,position)
const text="satyam shivam satyam sundaram";
console.log(text.indexOf("sundaram",1));

// it's similar to indexOf(), but it searches from the end of the string.
// lastindexof(searchstring)
// lastindexof(searchstring,position)
let strr = "banana";
console.log(strr.lastIndexOf("n"));
console.log(strr.lastIndexOf("a", 4)); // 3
// It searches backward from index 4
//The last "a" before index 4 is at index 3

// array.from()
console.log(Array.from(strr));

//The search() method looks for a match between a string and a regular expression, and returns the index of the first match.

// syntax - string.search(regexp)
// regexp - A regular expression (can also be a string, but regex is preferred).

// simple regex Examples
// | Pattern    | Meaning                                    | Matches                 |
// | ---------- | ------------------------------------------ | ----------------------- |
// | `a`        | the letter "a"                             | `apple`, `banana`       |
// | `\d`       | any **digit** (0-9)                        | `1`, `25`, `123abc`     |
// | `\w`       | any **word character** (a-z, A-Z, 0-9, \_) | `hello_123`             |
// | `.`        | **any character** (except newline)         | `a`, `1`, `@`           |
// | `^hello`   | string **starts with** "hello"             | `hello world`           |
// | `world$`   | string **ends with** "world"               | `this is world`         |
// | `[aeiou]`  | any **vowel**                              | `a`, `e`, `i`           |
// | `[A-Z]`    | any **uppercase** letter                   | `G`, `M`, `Z`           |
// | `\s`       | any **whitespace** (space, tab, newline)   | space, tab              |
// | `\bword\b` | exact **whole word "word"**                | `word`, not `swordfish` |


// special modifier (flag)
// | Flag | Meaning                   | Example    |
// | ---- | ------------------------- | ---------- |
// | `i`  | Case-insensitive          | `/hello/i` |
// | `g`  | Global (find all matches) | `/a/g`     |
// | `m`  | Multiline mode            | `/^a/m`    |


let searchString = "seven star hotel";
console.log(searchString.search("Star"));   // -1 bcos, it is case sencetive but, we use

console.log(searchString.search(/Star/i));  // 6 bcos, use of regexp
console.log(searchString.search(`^seven`)); // 0 

let numString = "there are 123 people of our 2 country";
console.log(numString.search(/\d+/g));  //10  / \d+ (one and more digits) /

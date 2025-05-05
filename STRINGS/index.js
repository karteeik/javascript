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

// charat() method - it returns the character at a specific position
console.log(firstString.charAt(2));
console.log(firstString.charAt(-7));    //not allow negative index

// charcodeat() method - it returns  the code of the character at a specified index in a string
// The method returns a UTF-16 code (an integer between 0 and 65535).
console.log(firstString.charCodeAt(1));

// at() method - it returns the character at a specific position
console.log(firstString.at(2));
console.log(firstString.at(-7));

console.log(firstString.toLowerCase());
console.log(firstString.toUpperCase());

//trim() method - Removes leading/trailing spaces
let cleanstr = firstString.trim();
console.log(cleanstr);
console.log(firstString.trimStart());
console.log(firstString.trimEnd());

//slice() method - Extracts part of a string
console.log(firstString.slice(5));
console.log(firstString.slice(1,5));
console.log(firstString.slice(-9)); //backword string allow negative counts

//substring() method - Similar to slice but doesn't allow negative indexes
console.log(firstString.substring(2));
console.log(firstString.substring(1,5));
console.log(firstString.substring(-11));  //not work negative numbers
console.log(firstString.substring(13,5));  // If start > end, it automatically swaps them

//replace() method - Replaces part of the string
console.log(firstString.replace("mahadev","shambhu"));

//split() method - Converts string to array
console.log(firstString.split(","));

//repeat() method - Repeats the string (n) times
console.log(firstString.repeat(2));

// searching element methods in string

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
// | `g`  | Global (find all matches) | `/a/g`     |     most imp
// | `m`  | Multiline mode            | `/^a/m`    |


let searchString = "seven star hotel";
console.log(searchString.search("Star"));   // -1

console.log(searchString.search(/Star/i));  // 6 bcos, use of (i) modifier
console.log(searchString.search(`^seven`)); // 0 

let numString = "there are 123 people of our 2 country";
console.log(numString.search(/\d+/g));  //10  / \d+ (one and more digits) /

// in short search string without case censitive

// match() method - it return an array of the match values or null if no match is found 
// by default add regular expression (/string/)
// syntax - string.match(regex)

// | Pattern Used        | Return Type            | Description                             |
// | ------------------- | ---------------------- | --------------------------------------- |
// | Regex with `g` flag | Array of matches       | All matches found                       |
// | Regex without `g`   | Match object or `null` | First match + extra info (index, input) |
// | No match            | `null`                 | If nothing matches                      |

let matchStr = "hello javaScript , you learn world best javaScript caurse";
console.log(matchStr.match("javascript"));   //null
console.log(matchStr.match("javaScript"));  // return an array  by default convert regular expression
console.log(matchStr.match(/javaScript/));   // return an array 
console.log(matchStr.match(/javaScript/g));   // all match string
console.log(matchStr.match(/javascript/gi));   // all match string

// matchAll() method - returns an iterator of all matches, provide details information about each match, return empty iterator if no match is found
// also add bydefault g flag at the end 
console.log(matchStr.matchAll("javaScript"));  //returns an iterator
let result = matchStr.matchAll("javaScript");

// use of loop
for(let item of result){
    console.log(item);
}

// use of spread operator
console.log(...matchStr.matchAll("javaScript"));  // return array of all matches bydefault g flag add

let strChek = "hello, surya vardhan  ";
// inclues() method - Checks if substring exists - return boolean value
// not support regular expression
console.log(strChek.includes("urya"));

// startsWith() method - Checks if string starts with substring - return boolean value
// not support regular expression
console.log(strChek.startsWith("hel"));

// endswith() method - Checks if string ends with substring
// not support regular expression
console.log(strChek.endsWith("  "));   //end with some spaces
// arrays like an object
// 3 ways to create an array
// (1)using the array constructor
const players=new Array('ram','sita','laxman','bharat');
console.log(players)
console.log(typeof players)
console.log(Array.isArray(players))
console.log(players.at(-1))     //it return last element in array
 

// (2)array literal
const fruits=['apple','banana','cherry'];
console.log(fruits)

// accessing elements
console.log(fruits[2])

// modifying elements
fruits[2]="mango";
console.log(fruits[2])

// (3)an empty array
const group=[];
console.log(typeof group);

// for 0f loop , also known as iterable
let frds=["raj","mohan","rahul","pavan","madhur"];
// normal loop

for (i=0; i<frds.length; i++)
    console.log(frds[i]);

// for of loop - it return values
for(let i of frds)
    console.log(i);

// for in loop - it return index 
for(let i in frds)
    console.log(i,frds[i]);

// foreach method - with index method
// arr.foreach(function(cur_value,index,array){
//      //logic here
// });

let frdsw=["raj","mohan","rahul","pavan","madhur"];
// frdsw.forEach(function(currentele,index,arr){
//     console.log(`${currentele} ${index}`)
// });

// fat arrow uses
//arr.forEach((cur_value,index,array)=>{
//      //logic here
// });
frdsw.forEach((currentele,index,arr)=>{
    // console.log(`${currentele} ${index}`)
    console.log(arr);
});

const myForeach=frdsw.forEach((currentele,index,frds)=>{
    return `${currentele} ${index}`;
});
console.log(myForeach);  //indefined then use map method

// map method - save array in one variable and creat new array
const myMap=frdsw.map((currentele,index,arr)=>{
    // return frdsw;
    return `${currentele} ${index}`
});
console.log(myMap);

// let numbers=[1,2,3,4,5];
// // example of foreach method
// numbers.forEach((currentele)=>{
//     console.log(currentele*2);
// });
// // example of map method
// const myMap=numbers.map((currentele)=>{
//     return currentele*2;
// });
// console.log(myMap);

const myMethod=["gita","sita","mira","rina","jaya"];
// // how to insert/add/replace and delete elements in array

// // (1)- push() method : add one & more element to the end in array
// myMethod.push("priya");
console.log(myMethod.push("priya"));    //return new length of an array
console.log(myMethod);

// // (2)- pop() method : remove last inserted element in array
myMethod.pop();
console.log(myMethod)

// // (3)- unshift() method : add one & more element to the beggining of array
myMethod.unshift("karina");
console.log(myMethod);

// // (4)- shift() method : remove first element in array
myMethod.shift();
console.log(myMethod);

// (5)- splice() method : instants method of an array removing,replcing,adding
// syntax - splice(start_index,delete_count,iteams)
// console.log(myMethod.splice()) //return an empty array
// myMethod.splice(1,2,"krishna")
// console.log(myMethod);

// searching & filtering an array
// (1)indexof(searchElement)- it returns index value of element
const nummbers=[1,2,3,4,5,6,4,8];
console.log(nummbers.indexOf(4)) //3
// (2)includes(searchElemenet,fromIndex-(search where to start)) -it returns element is exists or not.
console.log(nummbers.includes(4,3));
// (3)lastindexof(searchElement)- it returns last reapeted index
console.log(nummbers.indexOf(4))
console.log(nummbers.lastIndexOf(4,5)); 

// [ search _ filter ] filter in an array

const posNumbers=[1,2,3,8,5,3,7,9,4,6];
// [i] find() method - it returns the first matching element in array which you want to find or undefined if no element is found.
const myFind=posNumbers.find((currentele)=>{
    return currentele > 7;
    // return currentele > 89;    undefined
});
console.log(myFind)
console.log(typeof myFind); //output - number

// [ii] findIndex() method - it returns the first matching element index in array which you want to find or -1 if no element is found.
// if only one argument than no need to parentheses
const myFindIndex=posNumbers.findIndex(currentele=>{
    return currentele > 7;
    // return currentele > 89;    return -1
});
console.log(myFindIndex)
console.log(typeof myFindIndex); //output - number

//[iii] filter() method - it returns new array with all element that return true from the callback , if no element match than return an empty array
// syntax array.filter(callback(currentEle,index,array));

// we use fat arrow function with one argument
const myFilter=posNumbers.filter(currentele=> currentele > 5);
const myFilter1=posNumbers.filter(currentele=> currentele > 52);
console.log(myFilter);
console.log(myFilter1); //return empty array bcos not found an element

// example1 - In e-commerce website when we want to delete or remove any product from addtocart page....

const products=[1,2,3,6,4,5,6,7];
let selectProduct=6;

const result=products.filter(currentele=> currentele!=selectProduct );
console.log(result);

//sort() method
console.log(products.sort());

// const sortArray=products.sort(())
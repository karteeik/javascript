// arrays like an object
// 3 ways to create an array
// (1)using the array constructor
// const players=new Array('ram','sita','laxman','bharat');
// console.log(players)
// console.log(typeof players)
// console.log(Array.isArray(players))

// (2)array literal
// const fruits=['apple','banana','cherry'];
// console.log(fruits)
// accessing elements
// console.log(fruits[2])
// modifying elements
// fruits[2]="mango";
// console.log(fruits[2])

// (3)an empty array
// const group=[];
// console.log(typeof group);

// for 0f loop , also known as iterable
let frds=["raj","mohan","rahul","pavan","madhur"];
// normal loop

// for (i=0; i<frds.length; i++)
//     console.log(frds[i]);

// for of loop - it return values
// for(let i of frds)
//     console.log(i);

// for in loop - it return index 
// for(let i in frds)
//     console.log(i,frds[i]);

// foreach method - with index method
// arr.foreach(()=>{});
// frds.forEach(function(currentele,index){
//     console.log(`${currentele} ${index}`)
// });

// fetch arrow uses
// frds.forEach((currentele,index)=>{
//     console.log(`${currentele} ${index}`)
// });

// const myForeach=frds.forEach((currentele,index,frds)=>{
//     return `${currentele} ${index}`;
// });
// console.log(myForeach);  //indefined then use map method

// map method - save array in one variable
// const myMap=frds.map((currentele,index,frds)=>{
//     // return `${currentele} ${index}`;
//     return frds;
// });
// console.log(myMap);

// let numbers=[1,2,3,4,5];
// // example of foreach method
// numbers.forEach((currentele)=>{
//     console.log(currentele*2);
// })
// // example of map method
// const myMap=numbers.map((currentele)=>{
//     return currentele*2;
// })
// console.log(myMap);

// const myMethod=["gita","sita","mira","rina","jaya"];
// // how to insert/add/replace and delete elements in array

// // (1)- push() method : add one & more element to the end in array
// myMethod.push("priya");
// console.log(myMethod);

// // (2)- pop() method : remove last inserted element in array
// myMethod.pop()
// console.log(myMethod)

// // (3)- unshift() method : add one & more element to the beggining of array
// myMethod.unshift("karina");
// console.log(myMethod);

// // (4)- shift() method : remove first element in array
// myMethod.shift()
// console.log(myMethod);

// (5)- splice() method : instants method of an array removing,replcing,adding
// syntax - splice(start_index,delete_count,iteams)
// console.log(myMethod.splice()) //return an empty array
// myMethod.splice(1,2,"krishna")
// console.log(myMethod);

// searching & filtering an array
// (1)indexof(searchElement)- it returns index value of element
const nummbers=[1,2,3,4,5,6,4,8]
console.log(nummbers.indexOf(4)) //3
// (2)includes(searchElemenet,fromIndex-(search where to start)) -it returns element is exists or not.
console.log(nummbers.includes(3,2));
// (3)lastindexof(searchElement)- it returns last reapeted index
console.log(nummbers.indexOf(4))
console.log(nummbers.lastIndexOf(4));


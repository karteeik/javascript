// when create var then var_name must be start letter,under_score,dollar($),not space
var myAge=30;
console.log(myAge);

var _myAge=30;
console.log(_myAge);


var $myAge=30;
console.log($myAge);

// var my@ge=30;
// console.log(my@ge);

// var 123myAge=30;
// console.log(123myAge);

// 3 ways to declare variable

// (1)-(var) keyword
// ->if we use var keyword to declare variable then this variable 
//   (i)declare multiple Time
//   (ii)values assign multiple Time

var a=30;
var a="john"
console.log(a)

// (2)-(let) keyword
// ->if we use let keyword to declare variable then this variable 
//   (i)declare only one time
//   (ii)values assign multiple Time

let b=100;
    b=1000;
    b=423432;
console.log(b)

// (3)-(const) keyword
// ->if we use const keyword to declare variable then this variable 
//   (i)declare only one time Time
//   (ii)values assign only one Time

const c=230;
// const c=23;
console.log(c)
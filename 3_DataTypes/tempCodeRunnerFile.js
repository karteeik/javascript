// console.log("extra parseint example")
console.log(parseInt("098"))
console.log(parseInt("-234"))
console.log(parseInt("&263"))
console.log(parseInt("xyz"))
console.log(parseInt("  897"))
console.log(parseInt("213er"))

// Nan-not a number
console.log(parseInt("xyz")==parseInt("#$%"))  //false
// that's the reason of Nan==Nan is false
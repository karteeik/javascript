// Math object in js
// it  is a built-in object that provides properties and methods for mathematical constants and functions.
// It is not a constructor, meaning you do not create instances of Math.

// [1] Math constants  
// syntax - Math.property
console.log(Math.PI);   // it returns pi value
console.log(Math.E);    
console.log(Math.SQRT2);
console.log(Math.SQRT1_2);  
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG10E);  

// [2] Math methods
// [i] basic arithmetic
// abs(x)
console.log(Math.abs(-19));

// sign(x)
console.log(Math.sign(28));

// trunc(x)
console.log(Math.trunc(23.3));

// [ii] rounding
// round(x)
console.log(Math.round(4.8));
console.log(Math.round(4.3));

// floor(x)
console.log(Math.floor(4.6));

// ceil(x)
console.log(Math.ceil(4.3));

// [iii] powers & roots
// pow(x,y) - (number,how many time multiply)
console.log(Math.pow(4,2));

// sqrt(x) - square root
console.log(Math.sqrt(4));

// cbrt(x) - cube root
console.log(Math.cbrt(27));

// [iv] min/max
// min(...arg)
console.log(Math.min(3,2,4,5,7));

// max(...arg)
console.log(Math.max(2,4,6,3,7,1));

// [v] random numbers - it returns float value between 0 and 1
console.log(Math.random());

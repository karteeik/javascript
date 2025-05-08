// Math object in js
// Math is static
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
// abs(x) - The absolute value of a number is its distance from 0 on the number line, without considering direction — so it's always non-negative
// or simple word how far the number is from 0. always positive 
console.log(Math.abs(-19));
console.log(Math.abs(232));

// sign(x) - (-1,0,1) (negative number,zero,positive number)
console.log(Math.sign(28));
console.log(Math.sign(0));
console.log(Math.sign(-28));

// trunc(x) - Remove fractional part (decimal value)
console.log(Math.trunc(23.3));
console.log(Math.trunc(-23.321));

// [ii] rounding
// round(x) - it returns nearest integer
console.log(Math.round(4));
console.log(Math.round(4.8));
console.log(Math.round(4.3));

// floor(x) - it returns down to the nearest integer
console.log(Math.floor(4));
console.log(Math.floor(4.6));
console.log(Math.floor(4.01));
console.log(Math.floor(-4.01));     // -5 because -5 < -4

// ceil(x) - it returns up to the nearest integer
console.log(Math.ceil(4.3));
console.log(Math.ceil(4.03));
console.log(Math.ceil(-4.03));  // -4 because -4 > -5

// [iii] powers & roots
// pow(x,y) - (number,how many time multiply)
console.log(Math.pow(4,2));
console.log(4**2);

// sqrt(x) - square root
console.log(Math.sqrt(4));

// cbrt(x) - cube root (n * n * n)
console.log(Math.cbrt(64));

// [iv] min/max
// min(...arg)
console.log(Math.min(3,2,4,5,7));

// max(...arg)
console.log(Math.max(2,4,6,3,7,1));

// [v] random numbers - it returns float value between 0 and 1
console.log(Math.round(Math.random()* 100));
console.log((Math.random()* 100).toFixed(2)); // tofixed() use to decimal number

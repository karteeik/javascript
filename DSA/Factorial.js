// Using Function
const factorial = (n) => {
  let fact = 1;

  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
};

console.log(factorial(5));

// Using Recursion

const factorialUsingRecursion = (n) => {
  if (n < 0) return "Invalid input";
  if (n === 0 || n === 1) return 1;
  return n * factorialUsingRecursion(n - 1);
};

console.log(factorialUsingRecursion(5));

// One Line Factorial
const factorialOne = n => (n === 0 || n === 1 ? 1 : n * factorialOne(n - 1));
console.log(factorialOne(5));

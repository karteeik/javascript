const isPrime = (n) => {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) count++;
  }

  if (count === 2) {
    return true;
  } else {
    return false;
  }
};
console.log(isPrime(3) ? "prime" : "not prime");

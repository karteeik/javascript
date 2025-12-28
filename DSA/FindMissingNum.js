const arr = [0, 1, 3, 2, 4, 5, 7];
console.log(arr.sort((a, b) => a - b));

const FirstElem = arr[0];
const lastElem = arr[arr.length - 1];

let sum = 0;
for (let i = FirstElem; i <= lastElem; i++) {
  sum += i;
}

const arrSum = arr.reduce((sum, Elem) => sum + Elem, 0);

const missingELem = sum - arrSum;

console.log("Missing Element :", missingELem);

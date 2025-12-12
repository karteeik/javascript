const arr = [6, 2, 4, 2, 5, 67, 2, 5];

// const removeDuplicate = [...new Set(arr)];
// console.log(removeDuplicate);

const removeDuplicate = arr.filter(
  (currElem, index) => arr.indexOf(currElem) == index
);
console.log(removeDuplicate);

const arr1 = [];
for (let i = 0; i < arr.length; i++) {
  let isDuplicate = false;
  for (let j = 0; j < arr1.length; j++) {
    if (arr[i] === arr1[j]) {
      isDuplicate = true;
      break;
    }
  }
  if (!isDuplicate) {
    arr1.push(arr[i]);
  }
}

console.log(arr1);

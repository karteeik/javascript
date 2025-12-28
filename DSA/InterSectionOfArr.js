const arr = [32, 54, 42, 12, 64, 32, 21];
const arr1 = [23, 43, 42, 54, 61, 32];

const uniqSet = new Set();

arr.forEach((element, index) => {
  arr1.forEach((element, index1) => {
    if (arr[index] == arr1[index1]) {
        console.log(element);
      uniqSet.add(element);
    }
  });
});

console.log(...uniqSet);

const interSection = arr.filter((item) => arr1.includes(item));
console.log(interSection);
console.log([...new Set(interSection)]);

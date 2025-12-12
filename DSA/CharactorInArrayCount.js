const arr = ["e", "f", "h", "f", "w", "r", "y", "r", "e", "f"];
const arr1 = [];
const frequency = {};

for (let i = 0; i < arr.length; i++) {
  if (arr1.includes(arr[i])) continue;

  let count = 0;
  for (let j = i; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      count += 1;
    }
  }
  arr1.push(arr[i]);
  frequency[arr[i]] = count;
}
console.log(frequency);

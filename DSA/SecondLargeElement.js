const arr = [4, 5, 2, 7, 8, 1, 9, 9, 3];

let largestElement = arr[0];
let secondLargestElement = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largestElement) {
    largestElement = arr[i];
  }
}
// console.log("Largest Element is : ", largestElement);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] != largestElement && arr[i] > secondLargestElement) {
    secondLargestElement = arr[i];
  }
}

if (secondLargestElement === 0) {
  console.log("No, Any Second Largest Element. All Element are Same");
} else {
  console.log("Second Largest Element is : ", secondLargestElement);
}

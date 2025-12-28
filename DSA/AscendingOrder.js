const arr = [7, 5, 2, 5, 3, 4, 9, 2];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);

// check the array is sorted or not ?
// const isSort = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// };

// arr = [2, 3, 25, 8, 9];
// console.log(isSort(arr));

// const arr = [7, 5, 2, 5, 3, 4, 9, 2];

// let isSorted = true;

// // Step 1: Check if array is sorted
// for (let i = 0; i < arr.length - 1; i++) {
//   if (arr[i] > arr[i + 1]) {
//     isSorted = false;
//     break;
//   }
// }

// // Step 2: Act based on result
// if (isSorted) {
//   console.log("Already sorted");
// } else {
//   // Bubble Sort
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   console.log("Sorted array:", arr);
// }

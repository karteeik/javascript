// 1. Array Backwards Search: findLast() & findLastIndex()
// .findLast() returns the last array element matching your callback.
// .findLastIndex() returns its index.

const arr = [1,5,78,3,21,52];
console.log(arr.find((elem)=>elem));
console.log(arr.findLast((elem)=>elem));
console.log(arr.findLast((elem)=>elem > 20));
console.log(arr.findLastIndex((elem)=>elem));

// 2. Non‑Destructive Array Methods
// Functional-style methods that don’t mutate the original array
// .toReversed() – returns a reversed copy
console.log(arr.toReversed());

// .toSorted() – returns a sorted copy
console.log(arr.toSorted());

// .toSpliced(start, deleteCount, …items) – returns a spliced copy
const toSplicedArr = arr.toSpliced(2,4,12);
console.log(toSplicedArr);

// .with(index, value) – returns a copy with a replaced element
const withArr = arr.with(3,24);
console.log(withArr);



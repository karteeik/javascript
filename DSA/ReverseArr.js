const reverseArray = (arr) => {
  let rev = new Array();

  for (let index = arr.length - 1; index >= 0; index--) {
    rev.push(arr[index]);
  }

  return rev;
};

console.log(reverseArray([13, 32, 23, 23, 34, 2, 24]));

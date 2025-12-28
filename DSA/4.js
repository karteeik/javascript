const nums1 = [1, 2];
const nums2 = [3, 4];

const findMedianSortedArrays = (nums1, nums2) => {
  const mergeArr = [...nums1, ...nums2].sort((a, b) => a - b);

  const n = mergeArr.length;

  if (n % 2 == 0) {
    // for Even
    const mid1 = mergeArr[n / 2 - 1];
    const mid2 = mergeArr[n / 2];
    return (mid1 + mid2) / 2;
  } else {
    // for Odd
    return mergeArr[Math.floor(n / 2)];
  }
};

console.log(findMedianSortedArrays(nums1, nums2));

var findMedianSortedArrays = function(nums1, nums2) {
  let totalLen = nums1.length + nums2.length;
  let idx1 = 0;
  let idx2 = 0;
  let curr;
  let last;

  while (idx1 + idx2 <= totalLen/2) {
    if (curr) {
      last = curr;
    }
    let elOne = nums1[idx1];
    let elTwo = nums2[idx2];
    if (elOne === undefined) {
      curr = elTwo;
      idx2++;
    } else if (elTwo === undefined) {
      curr = elOne;
      idx1++;
    } else if (elOne < elTwo) {
      curr = elOne;
      idx1++;
    } else {
      curr = elTwo;
      idx2++;
    }
    // console.log(idx1 + ', ' + elOne + ' - ' + idx2 + ', ' + elTwo);
    console.log(curr + ', ' + last);
  }
  return totalLen % 2 === 0 ? (last + curr) / 2 : curr;
};

console.log( findMedianSortedArrays([1, 2], [3, 4]));
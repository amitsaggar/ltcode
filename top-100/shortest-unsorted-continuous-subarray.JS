var findUnsortedSubarray = function(nums) {
  let min = Number.POSITIVE_INFINITY, max = Number.NEGATIVE_INFINITY;
  let flag = false;
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[i - 1])
          flag = true;
      if (flag)
          min = Math.min(min, i-1);
  }
  flag = false;
  for (let i = nums.length - 2; i >= 0; i--) {
      if (nums[i] > nums[i + 1])
          flag = true;
      if (flag)
          max = Math.max(max, i+1);
  }

  let l, r;
  for (l = 0; l < nums.length; l++) {
      if (min < nums[l])
          break;
  }
  for (r = nums.length - 1; r >= 0; r--) {
      if (max > nums[r])
          break;
  }
  return r - l < 0 ? 0 : r - l + 1; 
};

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
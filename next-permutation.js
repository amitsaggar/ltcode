var nextPermutation = function(nums) {
  let i = nums.length - 2;

  function reverse(nums, start) {
    let i = start, j = nums.length - 1;
    while (i < j) {
        swap(nums, i, j);
        i++;
        j--;
    }
  }
  
  function swap(nums, i, j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
  }

  while (i >= 0 && nums[i + 1] <= nums[i]) {
      i--;
  }
  if (i >= 0) {
      let j = nums.length - 1;

      console.log( i + ' - ' + j);
      while (j >= 0 && nums[j] <= nums[i]) {
          j--;
      }
      swap(nums, i, j);
  }
  reverse(nums, i + 1);

  return nums;
};

console.log( nextPermutation([4,2,6]) );
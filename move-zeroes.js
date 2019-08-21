var moveZeroes = function(nums) {
  for (let lastNonZeroFoundAt = 0, cur = 0; cur < nums.length; cur++) {
      if (nums[cur] != 0) {
          swap(lastNonZeroFoundAt++, cur, nums);
          console.log(lastNonZeroFoundAt + ' - ' + cur + ' - ' + nums);
      }
  }
  
  function swap(i, j, nums) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
  }
  
  return nums;
};

console.log(moveZeroes([0,1,0,3,12]));
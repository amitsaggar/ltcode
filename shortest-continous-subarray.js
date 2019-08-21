var findUnsortedSubarray = function(nums) {
  let min = Number.MAX_VALUE,
      max = Number.MIN_VALUE,
      flag = false;
  
  for(let i = 1; i < nums.length; i++) {
    if(nums[i] < nums[i-1]) {
      min = Math.min(min, nums[i]);
    }
  }

  for(let i = nums.length-2; i >= 0; i--) {
    if(nums[i] > nums[i+1]) {
      max = Math.max(max, nums[i]);
    }
  }

  let l, r;
  for(l=0; l<nums.length; l++) {
    if(min < nums[l])
      break;
  }

  for(r=nums.length-1; r >= 0; r--) {
    if(max > nums[r])
      break;
  }

  return (r - l < 0) ? 0 : r - l + 1;
}
var subarraySum = function(nums, k) {
  if (nums == null || k == null)
      return;
  let lookup = {};
  lookup[0] = 1;
  let sum = 0;
  let count = 0;
  for(let i=0; i<nums.length; i++) {
      sum += nums[i];

      if(lookup[sum-k] != undefined)
          count += lookup[sum-k];
      
      let a = lookup[sum] != undefined ? lookup[sum] : 0;
      lookup[sum] = a+1;
      // console.log(lookup);
  }
  return count;
};

console.log(subarraySum([1,1,1], 2));
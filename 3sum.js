/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:
The solution set must not contain duplicate triplets.

Example:
Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/
var threeSum = function(nums) {
  let result = [];
  if(nums == null || nums.length == 0) {
    return result;
  }
  let target = 0;
  // Sort the nums.
  nums.sort();
  // console.log(nums);
  let n = nums.length;

  for(let i = 0; i < n-2; i++) {
    if(i==0 || (i > 0 && nums[i] != nums[i-1])) {
      let lo = i+1;
      let hi = n-1;
      let sum = target - nums[i];
      // console.log(lo, hi);
      while(lo < hi) {
        if(nums[lo] + nums[hi] == sum) {
          // console.log(nums[i], nums[lo], nums[hi]);
          result.push([nums[i], nums[lo], nums[hi]]);
          while (lo < hi && nums[lo] == nums[lo+1]) lo++;
          while (lo < hi && nums[hi] == nums[hi-1]) hi--;
          lo++; hi--;           
        } else if(nums[lo] + nums[hi] < sum) {
          lo++;
        } else {
          hi--;
        }
      }      
    }
  }
  return result;
}
/*
  var threeSum = function(nums) {
    nums = nums.sort(function(a, b){return a - b});
    let results = [];
    for(i=0; i<nums.length; i++) {
      let j=i+1, k=nums.length-1;
      if (i > 0 && nums[i] === nums[i - 1]) { continue; }
      while( nums[j] < nums[k] ) {   
        let sum = nums[i] + nums[j] + nums[k];
        if (sum == 0) {
          results.push([nums[i], nums[j], nums[k]]);
        }
        if (sum > 0) {
          k -= 1;
        } else {
          j +=1;
        }
        k -= 1;
      }
    }
    return results;
  };
*/
results = threeSum([-1, 0, 1, 2, -1, -4]);
results.forEach(element => {
  console.log(element);
});;
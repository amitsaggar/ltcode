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

results = threeSum([-1, 0, 1, 2, -1, -4]);
console.log( results);
/*
Maximum Subarray
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

1) Divide the given array in two halves
2) Return the maximum of following three
….a) Maximum subarray sum in left half (Make a recursive call)
….b) Maximum subarray sum in right half (Make a recursive call)
….c) Maximum subarray sum such that the subarray crosses the midpoint

The lines 2.a and 2.b are simple recursive calls. How to find maximum subarray sum such that the subarray crosses the midpoint? We can easily find the crossing sum in linear time. The idea is simple, find the maximum sum starting from mid point and ending at some point on left of mid, then find the maximum sum starting from mid + 1 and ending with sum point on right of mid + 1. Finally, combine the two and return.
*/

var maxSubArray = function(nums=[-2,1,-3,4,-1,2,1,-5,4]) {
  let i=0;
  let j= 0;
  let sum = -99;
  function add(a, b) {
    return a + b;
  }

  for(i=0; i<nums.length; i++) {
    for(j=i+1; j<=nums.length; j++) {
      let sub_sum = (nums.slice(i,j)).reduce(add, 0);
      if( sub_sum > sum ) {
        let max_sum_aray = [];
        sum = sub_sum;
        max_sum_aray = sub_sum;
      }
    }
  }
  return sum;
};


var maxNewSubArray = function(nums) {
  if (!nums || nums.length === 0) { return null; }
  let Cs = nums[0];
  let Rs = nums[0];
  for(i=1; i < nums.length; i++) {
    let num = nums[i];
    if(Cs + num < num) {
      Cs = num;
    } else {
      Cs += num;
    }
    if (Cs > Rs) {
      Rs = Cs;
    }
  }
  return Rs;
};

console.log(maxNewSubArray([-2,1,-3,4,-1]));
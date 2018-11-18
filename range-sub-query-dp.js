/*
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

Example:
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
Note:
You may assume that the array does not change.
There are many calls to sumRange function.
*/

var NumArray = function(nums) {
  let n = nums.length;
  this.nums = nums;
  this.sumToNumber = [nums[0]];
  for(let i = 1; i < n; i++){
      this.sumToNumber[i] = nums[i] + this.sumToNumber[i-1];
  }
};
NumArray.prototype.sumRange = function(i, j) {
  if(i === 0){
      return this.sumToNumber[j];
  }else {
      return this.sumToNumber[j] - this.sumToNumber[i-1];
  }
};

var abc = new NumArray([-2, 0, 3, -5, 2, -1]);
var z = abc.sumRange([0,-5]);
console.log( z );
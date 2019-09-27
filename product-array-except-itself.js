/*
var productExceptSelf = function(nums) {
  let result = new Array(nums.length);
  let n = nums.length;
  result[0] = 1;
  
  for(let i=1; i<n; i++) {
      result[i] = result[i-1] * nums[i-1];
  }
  console.log(result);
  
  let res = 1;
  for(let i = n-1; i >= 0; i--) {
      result[i] *= res;
      res *= nums[i];
  }
  
  return result;
};
*/

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
var productExceptSelf = function(list) {
  // I want to make result array first left.
  // Then update same result with right side of elements.
  let result = [];
  let left = 1;

  for(let i = 0; i < list.length; i++) {
    result[i] = left;
    left *= list[i];
  }

  let right = 1;
  for(let i = list.length - 1; i >= 0; i--) {
    result[i] *= right;
    right *= list[i];
  }

  return result;
};

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([1,2,3,0]));
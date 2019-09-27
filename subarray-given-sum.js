/*
var findSubArraywithGivenSum = function(nums, sum) {
  if(nums == null || nums.length == 0) {
    return 0;
  }
  let count = 0;
  let n = nums.length;

  return helper(nums, sum, count, 0);

  function helper(nums, sum, count, start) {
    if(sum < 0) {
      return 0;
    } 
    if(sum == 0) {
      return 1;
    }

    for(let i=start; i<nums.length; i++) {
      count += helper(nums, sum, count, i);
    }
    return count;
  }
}
*/

var findSubArraywithGivenSum = function(nums, sum) {
  if(nums == null || nums.length == 0) {
    return 0;
  }
  let count = 0;
  let n = nums.length;
  let rS = 0;

  for(let i=0, j=0; i<nums.length; i++) {
    rS += nums[i];
    
    if(rS == sum) {
      count++;
    }

    while(rS > sum) {
      rS -= nums[j];
      j++;
      // console.log(rS, j, rS);
    }
  }
  return count;
}

console.log(findSubArraywithGivenSum([1, 4, 20, 3, 10, 5], 33));

[1, 4, 20, 3, 10, 5]

20+3+38
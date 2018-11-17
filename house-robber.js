/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
*/


var rob = function(nums) {
  let excl = 0;
  let incl = nums[0];
  for (i = 1; i < nums.length; i++) {
      let temp = incl;
      incl = Math.max(excl + nums[i], incl);
      excl = temp;
  }
  return incl;

  // let incl = 0, excl = 0;
  // for(i = 0; i <= nums.length; i++) {
  //   var temp = incl;
  //   var incl = max(incl, excl + nums[i]);
  //   var excl = temp;
  // }

};

console.log( rob([1,2,3,1]) )
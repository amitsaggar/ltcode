/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let maj = 0;
  let majority = nums.length/2;
  let count = 0;
  let obj = {};
  for(i = 0; i < nums.length; i++) {
    // prev = nums[i];
    // curr = nums[i+1];
    // if(prev == curr) {
    //     count++;
    // }
    if(obj[nums[i]] != undefined) {
        obj[nums[i]] = obj[nums[i]]+1;
    } else {
        obj[nums[i]] = 1;
    }
  }
  Object.keys(obj).forEach(function(key) {
      if(obj[key] >= majority) {
          maj = key;
      }
  }); 
  return maj;
};

console.log(majorityElement([3,2,3]));
var summaryRanges = function(nums) {
  let length = nums.length;
  result = [];
  for (let i = 0; i < length; i++) {
      let num = nums[i];
      while (i < length - 1 && nums[i] + 1 == nums[i + 1]) {
          i++;
      }
      if (num != nums[i]) {
          result.push(num + "->" + nums[i]);
      } else {
          result.push(num + "");
      }
  }
  return result;
}

console.log( summaryRanges([0,1,2,4,5,7]) );
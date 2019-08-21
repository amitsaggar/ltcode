var summaryRanges = function(nums) {
  let result = [];
  let lo = nums[0];
  // let hi = nums[0];
  for(let i = 0, j=1; i < nums.length; i++, j++) {
      if(nums[i] - hi == 1) {
          hi = nums[j];
          j++;
      } else {
          if(i == j) {
              result.push(nums[i].toString());
          } else {
              result.push(nums[i].toString() + "->" + nums[j].toString());
          }
          i = j+1;
      }
  }
  
};

console.log(summaryRanges([0,1,2,4,5,7]));
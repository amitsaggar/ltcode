
var maxProduct = function(nums) {
  if (!nums || nums.length === 0) { return null; }
  if (nums.length == 2) { Math.max(nums[0], nums[1]); }
  let Min = nums[0];
  let Max = nums[0];
  let counter = 0;
  for(i=1; i < nums.length; i++) {
    let num = nums[i], temp;
    if(num < 0) {
      temp = Min;
      Min = Max;
      Max = temp;
    } 
    newMin = Math.min(num, Min * num );
    newMax = Math.max(num, Max * num );
    return newMax;
  }
};

console.log(maxProduct([-2,3,-4]));
var majorityElement = function(nums) {
  function findMajority(nums){
    let candidate = 0;
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
      if(count == 0) {
        candidate = nums[i];
        count = 1;
      } else {
        if (candidate == nums[i]) 
          count++;
        else 
          count--;
      }
    }
    return candidate;
  }
  const maj = findMajority(nums);
  const majority = nums.length/2;
  let count = 0;
  for(let i = 0; i < nums.length; i++) {
    if(maj == nums[i])
      count++;
  }
  return (count > majority) ? maj: null;
};

console.log(majorityElement([4,7,4,4,7,4,4,9,4,3]));
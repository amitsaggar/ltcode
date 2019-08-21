// -2, 0, 1, 3

var countTriplets = function(nums, target) {
  let n = nums.length;
  let count = 0;
  if(n <= 2) {
    return;
  }
  for(let i=0; i<n-2; i++) {
    let s = i+1;
    let e = n-1;
    while(s < e) {
      if((nums[i] + nums[s] + nums[e]) < target) { 
        count += 1; 
      }
      e--;
    }
  }
  return count;
};

console.log(countTriplets([5, 1, 3, 4, 7], 12));
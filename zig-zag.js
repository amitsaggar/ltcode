// 4, 3, 7, 8, 6, 2, 1
// 3, 7, 4, 8, 2, 6, 1 output
// Simple soln O(nlogn) - sort and leave first ele and swap next in pairs.
// Try in o(n)
/*
  3 4 7 8 6 2 1

*/
var zigzag = function(nums) {
  let flag = true;
  let n = nums.length;

  function swap(s, e) {
    let temp = nums[s];
    nums[s] = nums[e];
    nums[e] = temp;
  }

  for(i=0; i<n-1; i++) {
    if(flag) {
      if(nums[i] > nums[i+1]) {
        swap(i,i+1);
      }
    } else {
      if(nums[i] < nums[i+1]) {
        swap(i,i+1);
      }
    }
    flag = !flag;
  }
  return nums;
}

console.log(zigzag([4, 3, 7, 8, 6, 2, 1]))
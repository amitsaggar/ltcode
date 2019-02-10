let arr = [-1, 0, 1, 2, -1, -4];

var threeSum = function(nums) {
  let obj = nums.reduce(function(acc, val, i) {
    acc[val] = acc[val] ? acc[val]+1 : 1;
    return acc;
  }, {});
  let i =0; j = nums.length-1;
  while(i < j) {
    // obj[num[i]] = (obj[num[i]] > 1) ? obj[num[i]] - 1: 0;
    // obj[num[j]] = (obj[num[j]] > 1) ? obj[num[j]] - 1: 0;
    let reqd = 0 - num[i] - num[j];
    if(acc[reqd]
  }
};
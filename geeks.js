
// var circArray = function(n) {
//   let a = [];
//   for(i = 0; i < n; i++) {
//     a[i] = i+1;
//   }
//   var i = a.length;
//   var j = 0;
//   while (i>0) {
//       a.splice(j, 1);
//       i--;
//       j += 2;      
//       console.log(a);
//     }
// }

// console.log( circArray(5) );

var climbStairs = function(n) {
  if (n == 1) {
      return 1;
  }
  dp = new Array(n);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

var houseRobber = function(n) {
  let prevSum = 0;
  let currSum = 0;
  n.forEach(function (num, index) {
    let temp = currSum;
    currSum = Math.max(prevSum + num, currSum);
    prevSum = temp;
  });
  return currSum;
};

var rob = function(nums) {
  if(nums.length < 1 || nums == null) return 0;
  if(nums.length == 1) {
      return nums[0];
  }
  const houseRobber = function(n, s, e) {
    let prevSum = 0;
    let currSum = 0;
    for(i=s; i<e; i++) {
      let temp = currSum;
      currSum = Math.max(prevSum + n[i], currSum);
      prevSum = temp;
    };
    return currSum;
  };
  let x = houseRobber(nums,0,nums.length-1);
  let y = houseRobber(nums,1,nums.length);
  return Math.max(x,y);
};

var Rob1 = function(n) {
  let prevSum = 0;
  let currSum = 0;
  if(n.length%2 != 0)
      n = n.slice(0,n-1);

  n.forEach(function (num, index) {
    let temp = currSum;
    currSum = Math.max(prevSum + num, currSum);
    prevSum = temp;
  });
  return currSum;
};
// console.log( climbStairs(5));
// console.log(Rob1([1,2,3,1]));
console.log(rob([1,2,3,1]));
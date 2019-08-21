/*
var productExceptSelf = function(nums) {
  let result = new Array(nums.length);
  let n = nums.length;
  result[0] = 1;
  
  for(let i=1; i<n; i++) {
      result[i] = result[i-1] * nums[i-1];
  }
  console.log(result);
  
  let res = 1;
  for(let i = n-1; i >= 0; i--) {
      result[i] *= res;
      res *= nums[i];
  }
  
  return result;
};
*/

// [1,2,3,4]
// res = [1, 1, 2, 6, 24];


// result[i] = result[i-1] * num[i-1];
//           = 1
//           = 1*2 = 2
//           = 2*3 = 6
//           = 6*4 = 24

let nums = [1,2,3,4];
let result = new Array(nums.length);
let n = nums.length;
result[0] = 1;

for(let i=1; i<n; i++) {
    result[i] = result[i-1] * nums[i-1];
}
console.log(result);

result = [1, 1, 2, 6];
                   6*4
                   res = 4;
                2*4
                res = 8
              2*8
                res = 16
          
         [1, 2, 3, 4]
          ----
         [24,12,8, 6]

[1,2,3,4]

[1,1,2,6]

r = 12*2;
[24, 12, 8, 6]



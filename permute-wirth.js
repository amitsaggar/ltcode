var permute = function(nums) {
  let n = nums.length;
  let result = [];
  permuteWirth(nums, n-1, result);
  return result;
  
  function permuteWirth(a, n, result) {
    if(n == 0) {
      result.push(a.slice());
    } else {
        var a = a;
        permuteWirth(a, n - 1, result)
        for(let i = 0; i < n; i++) {
            a = swap(a, i, n);
            permuteWirth(a, n - 1, result);
            a = swap(a, i, n);
        }
    }   
  }
  function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    return nums;
  }
}


// a = permute(["a", "b", "c"]);
// for(let i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let n = nums.length;
  let result = [];
  let Max = nums[0];
  let MaxIndex = 0;

  for(let i=1; i<n; i++) {
    if(nums[i] > nums[i-1]) {
      MaxIndex = i;
    } else{
      MaxIndex = i-1;
    }
  }
  
  function swap(nums, i, j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      
      return nums;
  }
};

a = nextPermutation([1, 2, 3]);
for(let i = 0; i < a.length; i++) {
  console.log(a[i]);
}

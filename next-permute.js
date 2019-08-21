var nextPermutation = function(nums) {
  let i = nums.length-1;
  let n = nums.length;
  let result = [];

    while(i > 0 && nums[i - 1] >= nums[i]) {
      i--;
    }
    i--;

    if (i >= 0) {
        let j = nums.length - 1;
        
        while (j >= 0 && nums[j] <= nums[i]) {
            j--;
        }
        console.log(i + ' - ' + j);
        nums = swap(nums, i, j);
    }
    nums = reverse(nums, i+1);

    return nums; 

    function swap(nums, i, j) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        return nums;
    }

    function reverse(nums, start) {
        let i = start, j = nums.length - 1;
        while (i < j) {
            swap(nums, i, j);
            i++;
            j--;
        }
        return nums;
    }
}

console.log(nextPermutation([1,1,5]));
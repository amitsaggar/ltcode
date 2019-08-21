let nums = [3,2,1,5,6,4];
let start = 0;
let end = nums.length-1;

while(start < end) {
  partition(nums, 0, nums.length-1);
}

function partition(nums, start, end) {
  let pivot = start, temp;
  
  while (start <= end) {
      while (start <= end && nums[start] <= nums[pivot]) start++;
      while (start <= end && nums[end] > nums[pivot]) end--;
      if (start > end) break;
      temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
  }

  temp = nums[end];
  nums[end] = nums[pivot];
  nums[pivot] = temp;
  return end;
}
/*
  function partition(start, end, nums) {
    let pivot = start;
    while(start <= end) {
      while(start < end && nums[start] < nums[pivot]) start++;
      while(start < end && nums[end] > nums[pivot]) end--;
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
    // console.log(start, end);
    temp = nums[end];
    nums[end] = nums[pivot];
    nums[pivot] = temp;    
    return end;
  }
*/
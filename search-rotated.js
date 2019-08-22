// Return the index of target.

var searchInRotated = function(nums, target) {
  if(nums == null || nums.length == 0) {
    return -1;
  }
  let start = 0;
  let end = nums.length - 1;
  let targetIndex = -1;

  let index = rotatedIndex(start, end, nums);
  
  if(nums[index] == target)
    return index;

  if(index == 0) {
    targetIndex = binarySearch(start, end, nums, target);
  }

  // [4,5,6,7,0,1,2]
  if( target < nums[0] ) {
    targetIndex = binarySearch(index, end, nums, target);
  }  else {
    targetIndex = binarySearch(start, index, nums, target);
  }  
   
  return targetIndex;

  function rotatedIndex(lo, hi, nums) {
    while(lo < hi) {
      let mid = Math.floor(lo + hi)/2;

      if (nums[mid] > nums[mid+1]) {
        return mid+1;
      } else {
        if(nums[mid] > nums[lo]) {
          lo = mid+1;
        } else {
          hi = mid;
        }
      }
    }
    return lo;
  }

  function binarySearch(lo, hi, nums, target) {
    // console.log(lo, hi, nums, target);
    while(lo < hi) {
      let mid = Math.floor(lo + hi)/2;
      if(nums[mid] == target) {
        return mid;
      } else {
        if (target > nums[mid]) {
          lo = mid + 1;
        } else {
          hi = mid - 1;
        }        
      }
    }
    return -1;
  }
};

console.log(searchInRotated([4,5,6,7,0,1,2], 6));
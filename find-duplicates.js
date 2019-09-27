/* 
Given an unsorted list of integers, return true if the list contains any duplicates within k indices of each element. 
Do it faster than O(n^2). 
*/

var findDuplicates = function(nums, k) {
  if(nums == null || nums.length == 0 || k == null) {
    return false;
  }

  let map = new Map();

  for(let i = 0; i < nums.length; i++) {
    if(map.has(nums[i])) {
      return true;
    }

    map.set(nums[i], true);
    
    if( i >= k ) {
      map.delete(nums[i-k]);
    }
  }
  return false;
}

console.log(findDuplicates([1, 2, 3, 1, 5], 3));
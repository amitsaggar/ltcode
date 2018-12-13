/*
Longest Consecutive Sequence:
  Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

  Your algorithm should run in O(n) complexity.

  Example:

  Input: [100, 4, 200, 1, 3, 2]
  Output: 4
  Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
*/
var longestConsecutive = function(nums) {
  let num_hash = nums.reduce((result, item, index, array) => {
    result[item] = 0;
    return result;
  }, {});
  let max = 0;
  for (var key in num_hash) {
    if(num_hash[key-1] == 0) {
      continue;
    }
    let length = 0;
    while(num_hash[key] == 0) {
      key += 1;
      length += 1;
    }
    max = Math.max(max, length);
  }
  return max;
};

console.log( longestConsecutive([100, 4, 200, 1, 3, 2]) );
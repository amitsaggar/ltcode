/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

// const nums = [2, 7, 11, 15];
// const target = 9;

// var twoSum = function(nums, target) {
//     const len = nums.length;
//     i = 0;
//     j= 0;
//     const result = [];
//     for(i=0; i<=len; i++) {
//         for(j=i+1; j<=len-1; j++) {
//             if (nums[i]+nums[j] == target) {
//                 result.push(i);
//                 result.push(j);
//             }
//         }
//     }
//     return result;
// };

// console.log(twoSum(nums, target));

// /* 
// New solution
// */

// var twoSumNew = function(nums, target) {
//     if (nums.length === 2) return [0, 1];
//     const len = nums.length;
//     let map = {};
//     for(let i = 0; i < len; i++) {
//         let n = target - nums[i];
//         let find = map[n];
//         if(find !== undefined) return [find, i];
//         else map[nums[i]] = i;
//     }
// };

// console.log(twoSumNew(nums, target));


/*******************************/
// [2, 7, 11, 15] 9
// find = 9-2;
// {
//     2:0
//     7:1
// }

// var twoSum1 = function(nums, target) {
//     length = nums.length;
//     lookup = {};
//     result = [];
//     for(i=0; i<length; i++) {
//         if(lookup[target - nums[i]] !== undefined) {
//             result.push(i, lookup[target - nums[i]]);
//         } else {
//             lookup[nums[i]] = i;
//         }
//     }
//     return result;
// };

// console.log(twoSum1([2, -7, 11, 15], 4));

var threeSum1 = function(nums, target) {
    length = nums.length;
    lookup = {};
    result = [];
    for(i=0; i<length; i++) {
        let left = i+1;
        let right = length-1;
        while(left < right)
        {
            // console.log(nums[left] + ' - ' + nums[i] + ' - ' + nums[right]);
            if (nums[left] + nums[i] + nums[right] > target) {
                right--;
            }else if (nums[left] + nums[i] + nums[right] < target) {
                left++;
            }else {
                result.push(i, left, right);
                right--;
                left++;
            }
        }
    }
    return result;
};

console.log(threeSum1([2, 7, 11, 9, 10, 8, 15], 24));










/*
Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
*/

var intersect = function(nums1, nums2) {
    if (nums1.length === 0 || nums2.length === 0) {
        return [];
    }
    
    var seen = {};
    
    nums1.forEach(function(num) {
        seen[num] = seen[num] + 1 || 1;
    });

    const result = [];

    nums2.forEach(function(num) {
        if (seen.hasOwnProperty(num) && seen[num] > 0) {
            result.push(num);
            seen[num] -= 1;
        }
    });
    
    return result;
};

const nums1 = [1,2,2,1];
const nums2 = [2,2];
console.log( intersect(nums1, nums2) );
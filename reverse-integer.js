/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

var n =  1563847412;

var reverse = function(x) {
    result = +(String(Math.abs(x)).split('').reverse().join(''));
    if (result > 0x7FFFFFFF) {
        return 0;
    }
    return x > 0 ? result : -result;
};
// console.log(reverse(n));

var reverseString = function(str) {
    let strArr = str.split("");
    let start = 0
    let end = strArr.length-1;
    while(start < end) {
        let temp = strArr[start];
        strArr[start] = strArr[end];
        strArr[end] = temp;
        start++;
        end--;
    }
    return strArr.join("");
};

console.log(reverseString("amit is my name"));


var secondLargestNum = function(nums) {
    let largest = Number.NEGATIVE_INFINITY;
    let second = Number.NEGATIVE_INFINITY;
    let temp = null;
    
    for(i=0;i<nums.length;i++) {
        if (nums[i] > largest)  {
            temp = largest;
            largest = nums[i];
            second = temp;
        } else if(nums[i] > second) {
                temp = second;
                second = nums[i];               
        }
    }
    return second;
};

console.log( secondLargestNum([1,2,3,9,8]) );

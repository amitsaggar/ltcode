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
console.log(reverse(n));
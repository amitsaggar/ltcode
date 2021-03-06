/*
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
*/

const haystack = "hello";
const needle = "ll";

var strStr = function(haystack, needle) {
  for (var i = 0; ; i++) {
    for (var j = 0; ; j++) {
      if (j == needle.length) return i;
      if (i + j == haystack.length) return -1;
      if (needle.charAt(j) != haystack.charAt(i + j)) break;
    }
  }
};

console.log(strStr(haystack,needle));
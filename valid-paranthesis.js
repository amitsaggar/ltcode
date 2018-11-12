/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/
var s = "{[}]";

var isValid = function(s) {
  let length = s.length;
  while (length > 0 && s.length) {
    s = s.replace(/\[\]|\{\}|\(\)/g, '');
    length -= 2;
  }
  return s === ''
};

console.log(isValid(s));
/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

var longsubString = function (str = "") {
  if (str.length == 0) {
    return 0;
  }
  var maxlength = 0;
  var i = 0;
  var j = 0;
  var lookup = {};
  while( j < str.length ) {
    if(!lookup.hasOwnProperty(str.charAt(j))) {
      lookup[str.charAt(j)] = j;
      maxlength = Math.max(maxlength, j-i);
      j++;
    } else {
      delete lookup[str.charAt(j)];
      i++;
    }
  }
  return maxlength;
};

var lengthOfLongestSubstring = s => {
  const visited = new Set();
  let left = 0;
  let right = 0;
  let res = 0;

  // use sliding window
  while (right < s.length) {
    const currentChar = s.charAt(right);
    // not visited
    if (!visited.has(currentChar)) {
      visited.add(currentChar);
      res = Math.max(res, right - left + 1);
      right++;
    } else {
      visited.delete(s.charAt(left));
      left++;
    }
  }

  return res;
};
console.log( longsubString("abcabcbb") );
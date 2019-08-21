/*
Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

Note: The input string may contain letters other than the parentheses ( and ).

Example 1:

Input: "()())()"
Output: ["()()()", "(())()"]

*************

Ans: Look for extra right paranthesis, and remove consequtive right paranthesis.
      and check if it is valid. -> add to results array.
      Reverse and check for left paranthesis.
*/

var removeInvalidParentheses = function(s) {
  let result = [];
  remove(s, 0, 0, result, ["(", ")"]);
  return result;

  function remove(s, start, lastremoveIndex, result, pair) {
    let stack = 0;
    let n = s.length;
    for(let i=0; i < n; i++) {
      if (s[i] == pair[0])
        stack++;
      if (s[i] == pair[1])
        stack--;
      if(stack >= 0)
        continue;
      
      for(j=lastremoveIndex; j<=i; j++)
      {
        if(s[j] == pair[1] && ( j == lastremoveIndex || s[j-1] != pair[1] )) {
          remove(s.slice(0,j) + s.slice(j+1,n), i, j, result, pair);
        }
      }
      return;
    }

    s = s.split("").reverse().join("");
    if(pair[0] == "(") {
      remove(s, 0, 0, result, [")","("]);
    } else {
      console.log(s);
      exit;      
      result.push(s);
    }
  }
};

console.log(removeInvalidParentheses("(j))("));
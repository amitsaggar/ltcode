/* 
Recursion 
DP
Memoization

23456
*/
var helper = function(data, k) {
  if(k == 0) {
    return 1;
  }
  s = data.length - k;
  if(data[s] == 0) {
    return 0;
  }
  if(memo[k] != null) {
    return memo[k];
  }

  result = helper(data, k-1, memo);
  if(k >= 2 && data.slice(s,s+2) <= 26) {
    result += helper(data, k-2, memo);
  }
  memo[k] = result;
  return result;
};

var num_ways = function(data = "") {
  memo = [];
  return helper(data, data.length, memo);
};

console.log(num_ways("23456"));
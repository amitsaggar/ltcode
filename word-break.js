var wordBreak = function(s, wordDict) {
  if (s == null || s.length == 0) return false;
  
  let n = s.length;
  
  // dp[i] represents whether s[0...i] can be formed by dict
  let dp = [];
  for(let i = 0; i < n; i++) {
    dp[i] = false;
  }
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      let sub = s.substring(j, i + 1);
      // console.log( i + ' - ' +  j + ' - ' +  sub );
      if (wordDict.includes(sub) && (j == 0 || dp[j - 1])) {
        dp[i] = true;
        break;
      }
    }
  }
  
  return dp[n - 1];
}

console.log( wordBreak("leetcode", ["leet", "code"]) );
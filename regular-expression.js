var isMatch = function(s, p) {
  if(s.length == 0 || p.length == 0)
      return false;
  let sLen = s.length;
  let pLen = p.length;
  let dp = new Array(sLen+1);
  for(let i = 0; i < sLen; i++) {
    dp[i] = new Array(pLen + 1);
  }
  dp[0][0] = true;
  
  for(let i = 0; i < pLen; i++) {
    if(p.charAt(i) == "*" && dp[0][i-1])
      dp[0][i] = true;
  }

  for(let i = 1; i < sLen; i++) {
    for(let j = 1; j < pLen; j++) {
      let m = i - 1, n = j - 1; 
      if((s.charAt(m) == p.charAt(n)) || p.charAt(n) == '.') {
        dp[i][j] = dp[i-1][j-1];
      }

      if(p.charAt(i) == "*") {

        if (p.charAt(j-1) != s.charAt(i) && p.charAt(j-1) != ".") {
          dp[i][j] = dp[i][j-2];
        } else {
          dp[i][j] = (dp[i][j-1] || dp[i-1][j] || dp[i][j-2]);
        }
      }      
    }
  }
  return dp[sLen-1][pLen-1];
};

console.log(isMatch("abb", "ab*"));
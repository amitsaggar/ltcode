var longestPalindrome = function(s) {
  
  let dp = new Array(s.length);
  for(let i = 0; i < s.length; i++) {
      dp[i] = new Array(s.length).fill(0);
  }

  let n = s.length;
  
  for (let i = 0; i < n; i++) {
      dp[i][i] = 1;
  }
  for (let i = 0; i < n-1; i++) {
      if (s.charAt(i) == s.charAt(i+1)) {
        dp[i][i+1] = 2;
      }
  }
  
  //Finding palindromes of length 3 to n and saving the longest
    for (let curr_len = 3; curr_len <= n; curr_len++) {
      for (let i = 0; i < n-curr_len+1; i++) {
        let j = i+curr_len-1;
        if (s.charAt(i) == s.charAt(j))
        {
          dp[i][j] = 2 + dp[i+1][j-1]; 
        } else {
          dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]); 
        }
      }
    }
    console.log(JSON.stringify(dp));
    return dp[0][s.length-1];
}

console.log(longestPalindrome("bbbab"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("bbadbb"));


// [
// [true,false,false],
// [false,true,false],
// [false,false,true]
// ]
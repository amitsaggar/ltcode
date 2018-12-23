var minDeletionSize = function(A) {
  let m = A.length, n = A[0].length, res = n - 1, k;
  let dp = []
  dp= [1];
  for (let j = 0; j < n; ++j) {
      for (let i = 0; i < j; ++i) {
          for (k = 0; k < m; ++k) {
              if (A[k].charAt(i) > A[k].charAt(j)) break;
          }
          if (k == m && dp[i] + 1 > dp[j])
              dp[j] = dp[i] + 1;
      }
      res = Math.min(res, n - dp[j]);
  }
  return res;
}

console.log(minDeletionSize(["babca","bbazb"]))
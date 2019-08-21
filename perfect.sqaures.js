/* 
Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

Example 1:

Input: n = 12
Output: 3 
Explanation: 12 = 4 + 4 + 4
*/

var numSquares = function(n) {
  if(n < 0)
    return 0;

  let a = new Array(n+1).fill(Number.MAX_VALUE);
  a[0] = 1;
  for(let i=1; i<=n; i++) {
    for(let j=1; j*j<=i; j++) {
      a[i] = Math.min(a[i], a[i-(j*j)] + 1);
      // console.log( a[i] );
    }
  }
  return a[n];
};

var numSquares = function(n) {
  if(n < 0)
    return 0;
    let a = new Array();
    a[0] = 1;
    while(a.length <= n) {
      let m = a.length;
      let cntSq = Number.MAX_VALUE;
      for(let i = 0; i * i < m; i++ ) {
        cntSq = Math.min(cntSq, a[m - i*i] + 1);
      }
      a.push(cntSq);
    }
    return a[n];
};
console.log(numSquares(12));

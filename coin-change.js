// https://www.youtube.com/watch?v=Y0ZqKpToTic
// Very nicely explained by Tusshar.
// Formula is 
/* 
If(j >= coin[i]) 
  T[i][j] = Min(T[i-1][j], 1 + T[i][j-coin[i]]);
else
  T[i][j] = T[i-1][j];
*/
var coinChange = function(coins, amount) {
  let cn = coins.length;
  let an = amount+1;
  let T = new Array(cn);
  for(let i = 0; i < cn; i++) {
      T[i] = new Array(an);
      T[i][0] = 0;
  }
  for(let j = 0; j < an; j++) {
     T[0][j] = j; 
  }

  for(let i = 1; i < cn; i++) {
      for(let j = 1; j < an; j++) {
          if(j > coins[i]) {
              T[i][j] = Math.min(T[i-1][j], 1 + T[i][j - coins[i]]);
          } else {
              T[i][j] = T[i-1][j];
          }
      }
  }
  return T[cn-1][an-1];
};


console.log(coinChange([1,2,5], 11));

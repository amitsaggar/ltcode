var knapsack = function() {
  let val = [60, 100, 120];
  let wt = [10, 20, 30];
  let W = 50;
  let n = val.length;

  function knapsackRec(W, wt, val, n) {
    if (n==0 || W==0){ return 0;}
    if(wt[n-1] > W) {
      knapsackRec(W, wt, val, n-1);
    } else {
      return Math.max(
        val[n-1] + knapsackRec(W-wt[n-1], wt, val, n-1),
        knapsackRec(W, wt, val, n-1)
      )
    }
  }

  function knapsackDp(W, wt, val, n) {
    let i, w = 0, K=[];

       // Build table K[][] in bottom up manner 
    for (i = 0; i <= n; i++) 
    { 
      K[i] = [];
        for (w = 0; w <= W; w++) 
        { 
          K[i][w] = 0;
            if (i==0 || w==0) 
                K[i][w] = 0; 
            else if (wt[i-1] <= w) 
                  K[i][w] = Math.max(val[i-1] + K[i-1][w-wt[i-1]],  K[i-1][w]); 
            else
                  K[i][w] = K[i-1][w]; 
        } 
    } 
    return K[n][W]; 
  } 

  console.log( knapsackDp(W, wt, val, n) );
}

console.log( knapsack() );

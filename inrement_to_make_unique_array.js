var minIncrementForUnique = function(A) {
  A = A.sort((a,b)=> { return a-b;} );
  let ans = 0, taken = 0;

  for (let i = 1; i < A.length; ++i) {
      if (A[i-1] == A[i]) {
          taken++;
          ans -= A[i];
      } else {
          let give = Math.min(taken, A[i] - A[i-1] - 1);
          ans += give * (give + 1) / 2 + give * A[i-1];
          taken -= give;
          console.log('- ' + give + ' -');
      }
      console.log(ans + ' - ' + taken);
  }

  if (A.length > 0)
      ans += taken * (taken + 1) / 2 + taken * A[A.length - 1];

  return ans;
}

console.log( minIncrementForUnique([1,2,2]) );
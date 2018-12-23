var largestTimeFromDigits = function(A) {
  let ans = -1;

  // Choose different indices i, j, k, l as a permutation of 0, 1, 2, 3
  for (let i = 0; i < 4; ++i)
      for (let j = 0; j < 4; ++j) if (j != i)
          for (let k = 0; k < 4; ++k) if (k != i && k != j) {
              let l = 6 - i - j - k;

              // For each permutation of A[i], read out the time and
              // record the largest legal time.
              let hours = 10 * A[i] + A[j];
              let mins = 10 * A[k] + A[l];
              console.log(hours, mins);
              if (hours < 24 && mins < 60)
                  ans = Math.max(ans, hours * 60 + mins);
          }

  return ans >= 0 ? Math.floor(ans / 60) + ":"+ ans % 60 : "";
};

console.log(largestTimeFromDigits([1,2,3,4]));
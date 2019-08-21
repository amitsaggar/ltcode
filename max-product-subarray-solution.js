function maxProduct(A) {
  if (A.length == 0) {
      return 0;
  }

  let maxherepre = A[0];
  let minherepre = A[0];
  let maxsofar = A[0];
  let maxhere, minhere;
  
  for (let i = 1; i < A.length; i++) {
    maxhere = Math.max(Math.max(maxherepre * A[i], minherepre * A[i]), A[i]);
    minhere = Math.min(Math.min(maxherepre * A[i], minherepre * A[i]), A[i]);
    maxsofar = Math.max(maxhere, maxsofar);
    maxherepre = maxhere;
    minherepre = minhere;
  }

  return maxsofar;
}

console.log(maxProduct([2,3,-3,-3,1,-3]));

6 = -18, -3
3 = 6, 3

var merge = function(A, m, B, n) {
  let i=m-1;
  let j=n-1;
  let k = m+n-1;
  while(i >=0 && j>=0)
  {
    if(A[i] > B[j])
      A[k--] = A[i--];
    else
      A[k--] = B[j--];
  }
  while(j>=0)
    A[k--] = B[j--];
  return A;
};

console.log( merge([1,2,3,5,0,0,0], 4, [2,5,6,7], 4) );
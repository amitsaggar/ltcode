var myPow = function(x, n) {
  let negative = false;
  if (n == 0) {
    return 1;
  }
  if (n == 1) {
    return x;
  }
  if (n == 2) {
    return x*x;
  }  
  if (n < 0) {
    negative = true;
  }
  n = Math.abs(n);

  if(n%2 == 0) {
    result = myPow(x,n/2)*myPow(x,n/2);
  } else {
    result = x * myPow(x,n-1);
  }
  return negative ? 1.0/result : result;
};

console.log( myPow(2,2) );
console.log( myPow(2,0) );
console.log( myPow(2,-2) );
console.log( myPow(2,3) );
console.log( myPow(2,-3) );
console.log( myPow(0,2) );
console.log( myPow(0.00001, 2147483647));
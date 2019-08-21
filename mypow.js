// var myPow = function(x, n) {
//   let negative = false;
//   if (n == 0) {
//     return 1;
//   }
//   if (n == 1) {
//     return x;
//   }
//   if (n == 2) {
//     return x*x;
//   }  
//   if (n < 0) {
//     negative = true;
//   }
//   n = Math.abs(n);

//   if(n%2 == 0) {
//     result = myPow(x,n/2)*myPow(x,n/2);
//   } else {
//     result = x * myPow(x,n-1);
//   }
//   return negative ? 1.0/result : result;
// };

var myPow = function(x, n) {
  let result = fastPow(x, Math.abs(n));
  if(n < 0)
      return 1/result;
  else 
      return result;
  
  function fastPow(X, N) {
      let res = 1.0;
      // if(N == 0)
      //     return 1;
      // if(N == 1)
      //     return X;
      // if(N == 2)
      //     return X * X;
      // if(N == Number.MAX_VALUE)
      //     return 0;

      // if( N % 2 == 0 )
      //     return fastPow(X, N/2) * fastPow(X, N/2);
      // else 
      //     return X * fastPow(X, N-1);
      while(N >= 1) {
        if(N % 2 == 1) {
          res *= X;
          N = N - 1;
        }
        X *= X;
        N /= 2;
      }
      return res;
  }
};

console.log( myPow(2,2) );
console.log( myPow(2,0) );
console.log( myPow(2,-2) );
console.log( myPow(2,3) );
console.log( myPow(2,-3) );
console.log( myPow(0,2) );
console.log( myPow(0.00001, 2147483647));
console.log( myPow(2, 10));